import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { guidesOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...guidesOptions}>{children}</DocsLayout>;
}
