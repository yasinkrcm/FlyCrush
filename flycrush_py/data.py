"""Static data loader: the ONLY file touch is ONE read of same-dir JSON at init.

Looks for ../../public/data/*.json relative to this package (repo checkout),
or $FLYCRUSH_DATA override. Never any network.
"""
from __future__ import annotations

import json
import os

_FILES = ("connectome-subset.json", "readout-weights.json", "training-report.json")


def data_dir() -> str:
    override = os.environ.get("FLYCRUSH_DATA")
    if override and os.path.isdir(override):
        return override
    here = os.path.dirname(os.path.abspath(__file__))
    cand = os.path.normpath(os.path.join(here, "..", "public", "data"))
    return cand


def load_json(name: str):
    """Returns (ok, doc_or_error_string). Never raises."""
    try:
        with open(os.path.join(data_dir(), name), "r", encoding="utf-8") as fh:
            return True, json.load(fh)
    except Exception as exc:  # missing file, bad JSON, bad encoding...
        return False, f"{type(exc).__name__}: {exc}"


def validate_subset(doc) -> tuple:
    """Structural guard: unique IDs, finite xyz, weights in range, decoders resolvable."""
    errors = []
    try:
        if not isinstance(doc, dict):
            return False, ["not-an-object"]
        ns = doc.get("neurons")
        if not isinstance(ns, list) or not ns:
            errors.append("empty-neurons")
            return False, errors
        ids = set()
        for i, nr in enumerate(ns):
            if not isinstance(nr, dict) or not isinstance(nr.get("id"), int):
                errors.append(f"neuron[{i}].id")
                continue
            if nr["id"] in ids:
                errors.append(f"dup-id:{nr['id']}")
            ids.add(nr["id"])
            xyz = nr.get("xyz")
            if (
                not isinstance(xyz, (list, tuple))
                or len(xyz) != 3
                or any(not isinstance(x, (int, float)) or x != x or abs(x) == float("inf") for x in xyz)
            ):
                errors.append(f"neuron[{i}].xyz")
        for i, e in enumerate(doc.get("weights") or []):
            if not isinstance(e, (list, tuple)) or len(e) != 3:
                errors.append(f"weight[{i}].shape")
                continue
            a, b, w = e
            if not isinstance(a, int) or not isinstance(b, int) or not (0 <= a < len(ns) and 0 <= b < len(ns)):
                errors.append(f"weight[{i}].dangling")
                continue
            if not isinstance(w, (int, float)) or w != w or abs(w) == float("inf"):
                errors.append(f"weight[{i}].w")
        dec = doc.get("decoders") or {}
        for k in ("colIds", "rowIds", "gateIds", "pamIds"):
            v = dec.get(k)
            if not isinstance(v, list) or not v:
                errors.append(f"decoders.{k}")
            elif any(i not in ids for i in v):
                errors.append(f"decoders.{k}.unknown-id")
        for d in ("up", "down", "left", "right"):
            if (dec.get("dirIds") or {}).get(d) not in ids:
                errors.append(f"decoders.dirIds.{d}")
        if not isinstance(doc.get("demoTrace"), list) or not doc.get("demoTrace"):
            errors.append("demoTrace")
    except Exception:
        errors.append("validator-exception")
    return (len(errors) == 0), errors[:12]
