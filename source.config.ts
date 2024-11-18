import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const { docs, meta } = defineDocs();

export const { docs: tutorialsDocs, meta: tutorialsMeta } = defineDocs({
  docs: { dir: 'content/tutorials' },
  meta: { dir: 'content/tutorials' },
});

export const { docs: guidesDocs, meta: guidesMeta } = defineDocs({
  docs: { dir: 'content/guides' },
  meta: { dir: 'content/guides' },
});

export default defineConfig();
