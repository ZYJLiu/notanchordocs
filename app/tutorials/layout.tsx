import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { tutorialsOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...tutorialsOptions}>{children}</DocsLayout>;
}
