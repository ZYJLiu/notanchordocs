import {
  defineDocs,
  defineConfig,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// default dir content/docs
export const { docs, meta } = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      index: z.boolean().default(false),
    }),
  },
});

export const { docs: tutorialsDocs, meta: tutorialsMeta } = defineDocs({
  docs: { dir: 'content/tutorials' },
  meta: { dir: 'content/tutorials' },
});

export const { docs: guidesDocs, meta: guidesMeta } = defineDocs({
  docs: { dir: 'content/guides' },
  meta: { dir: 'content/guides' },
});

export default defineConfig();
