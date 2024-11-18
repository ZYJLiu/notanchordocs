/* eslint-disable import/no-relative-packages -- required */
import {
  LibraryIcon,
  BookOpenIcon,
  GraduationCapIcon,
  type LucideIcon,
} from 'lucide-react';

export interface Subcategory {
  param: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const subcategories: Subcategory[] = [
  {
    param: '/docs',
    name: 'Documentation',
    description: 'Core docs',
    icon: LibraryIcon,
  },
  {
    param: '/tutorials',
    name: 'Tutorials',
    description: 'Learning Experience',
    icon: GraduationCapIcon,
  },
  {
    param: '/guides',
    name: 'Guides',
    description: 'How to guides',
    icon: BookOpenIcon,
  },
];
