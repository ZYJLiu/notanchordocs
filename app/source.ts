import {
  docs,
  meta,
  tutorialsDocs,
  tutorialsMeta,
  guidesDocs,
  guidesMeta,
} from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const docsSource = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});

export const tutorialsSource = loader({
  baseUrl: '/tutorials',
  source: createMDXSource(tutorialsDocs, tutorialsMeta),
});

export const guidesSource = loader({
  baseUrl: '/guides',
  source: createMDXSource(guidesDocs, guidesMeta),
});
