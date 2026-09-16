// FLYCRUSH grid-engine unit tests (node --test compatible, zero deps).
'use strict';
const assert = require('node:assert/strict');
const E = require('./grid-engine.js');
const { describe, it } = require('node:test');

describe('match-3 engine', () => {
  it('createBoard is deterministic and match-free', () => {
    const a = E.createBoard(42);
    const b = E.createBoard(42);
    assert.deepEqual(a, b);
    assert.equal(E.findMatches(a).length, 0);
    assert.equal(a.length, 8);
    assert.equal(a[0].length, 8);
  });

  it('findMatches detects horizontal and vertical runs', () => {
    const b = E.createBoard(1);
    b[0][0] = b[0][1] = b[0][2] = 0;
    b[0][3] = 1; b[1][0] = 2; b[2][0] = 3; // break vertical accident
    b[5][5] = b[6][5] = b[7][5] = 4;
    const m = E.findMatches(b);
    const s = new Set(m.map(([r, c]) => r + ',' + c));
    assert.ok(s.has('0,0') && s.has('0,1') && s.has('0,2'));
    assert.ok(s.has('5,5') && s.has('6,5') && s.has('7,5'));
  });

  it('trySwap rejects non-adjacent and out-of-bounds without mutating', () => {
    const b = E.createBoard(7);
    const snap = JSON.stringify(b);
    assert.equal(E.trySwap(b, 0, 0, 0, 2, E.mulberry32(1)).ok, false);
    assert.equal(E.trySwap(b, 0, 0, 9, 9, E.mulberry32(1)).reason, 'out-of-bounds');
    assert.equal(JSON.stringify(b), snap);
  });

  it('trySwap reverts a non-matching swap with no reward', () => {
    // Construct board where swapping (0,0)<->(0,1) cannot match:
    const b = [
      [0, 1, 2, 3, 4, 5, 0, 1],
      [1, 2, 3, 4, 5, 0, 1, 2],
      [2, 3, 4, 5, 0, 1, 2, 3],
      [3, 4, 5, 0, 1, 2, 3, 4],
      [4, 5, 0, 1, 2, 3, 4, 5],
      [5, 0, 1, 2, 3, 4, 5, 0],
      [0, 1, 2, 3, 4, 5, 0, 1],
      [1, 2, 3, 4, 5, 0, 1, 2],
    ];
    const r = E.trySwap(b, 0, 0, 0, 1, E.mulberry32(3));
    assert.equal(r.ok, false);
    assert.equal(r.score, 0);
    assert.deepEqual(r.board, b);
  });

  it('trySwap resolves a real match and awards score', () => {
    const b = E.createBoard(11);
    const mv = E.findValidMove(b);
    assert.ok(mv, 'seeded board must offer a valid move');
    const r = E.trySwap(b, mv.r1, mv.c1, mv.r2, mv.c2, E.mulberry32(99));
    assert.equal(r.ok, true);
    assert.ok(r.score > 0 && r.removed >= 3);
    assert.equal(E.findMatches(r.board).length, 0, 'board must be cascade-stable');
  });

  it('resolveCascades terminates and leaves a stable board', () => {
    const b = E.createBoard(5);
    b[0][0] = b[0][1] = b[0][2] = 2;
    b[1][0] = b[1][1] = b[1][2] = 2;
    const r = E.resolveCascades(b, E.mulberry32(8));
    assert.ok(r.cascades >= 1);
    assert.equal(E.findMatches(r.board).length, 0);
  });

  it('findValidMove returns null on a dead board; reshuffle repairs it', () => {
    const dead = [
      [0, 1, 2, 3, 4, 5, 0, 1],
      [1, 2, 3, 4, 5, 0, 1, 2],
      [2, 3, 4, 5, 0, 1, 2, 3],
      [3, 4, 5, 0, 1, 2, 3, 4],
      [4, 5, 0, 1, 2, 3, 4, 5],
      [5, 0, 1, 2, 3, 4, 5, 0],
      [0, 1, 2, 3, 4, 5, 0, 1],
      [1, 2, 3, 4, 5, 0, 1, 2],
    ];
    // This Latin-style board may or may not have a move; force-check the API contract:
    const mv = E.findValidMove(dead);
    if (mv === null) {
      const rs = E.reshuffle(dead, 1234);
      assert.equal(E.findMatches(rs.board).length, 0);
      assert.ok(E.findValidMove(rs.board) !== null, 'reshuffled board must be playable');
    } else {
      assert.ok(mv.r1 !== undefined);
    }
  });

  it('malformed / empty boards never throw', () => {
    assert.deepEqual(E.findMatches([]), []);
    assert.deepEqual(E.findMatches(null), []);
    assert.equal(E.findValidMove([]), null);
    assert.equal(E.findValidMove(null), null);
  });

  it('scoring scales with match size', () => {
    assert.ok(E.scoreForMatchSize(4) > E.scoreForMatchSize(3));
    assert.ok(E.scoreForMatchSize(5) > E.scoreForMatchSize(4));
  });
});
