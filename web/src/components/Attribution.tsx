import { asset } from '../lib/atlas';

/** Required by the template license. Restyled for FlyCrush; kept readable and linked. */
export function Attribution() {
  return (
    <span className="dim">
      built with{' '}
      <a href="https://github.com/cobanov/fly-connectome-template" target="_blank" rel="noreferrer">
        fly-connectome-template
      </a>{' '}
      by{' '}
      <a href="https://github.com/cobanov" target="_blank" rel="noreferrer">
        Mert Cobanov
      </a>{' '}
      ·{' '}
      <a href="/TEMPLATE-LICENSE.txt" target="_blank" rel="noreferrer">
        template license
      </a>
    </span>
  );
}
