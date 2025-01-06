import { type DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import { type HomeLayoutProps } from "fumadocs-ui/layouts/home";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { subcategories } from "./subcategories";
import { docsSource, tutorialsSource, guidesSource } from "./source";
import StackExchangeIcon from "@/public/icons/stackexchange.svg";
import GithubIcon from "@/public/icons/github.svg";
import DiscordIcon from "@/public/icons/discord.svg";
import Image from "next/image";

// Shared RootToggle component
const SharedRootToggle = () => (
  <RootToggle
    options={subcategories.map(subcategory => ({
      url: `${subcategory.param}`,
      icon: (
        <subcategory.icon className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5" />
      ),
      title: subcategory.name,
      description: subcategory.description,
    }))}
  />
);

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2 pl-2">
        <Image src="/icons/anchor.png" alt="Logo" width={24} height={24} />
        <span>Anchor Docs</span>
      </div>
    ),
    url: "/docs",
  },
  links: [
    {
      icon: <GithubIcon />,
      text: "Github",
      url: "https://github.com/coral-xyz/anchor",
      active: "none",
    },
    {
      icon: <DiscordIcon />,
      text: "Discord",
      url: "https://discord.com/invite/NHHGSXAnXk",
      active: "none",
    },
    {
      icon: <StackExchangeIcon />,
      text: "Stack Exchange",
      url: "https://solana.stackexchange.com/",
      active: "none",
    },
    // {
    //   text: 'Documentation',
    //   url: '/docs',
    //   active: 'nested-url',
    // },
    // {
    //   text: 'Tutorials',
    //   url: '/tutorials',
    //   active: 'nested-url',
    // },
    // {
    //   text: 'Guides',
    //   url: '/guides',
    //   active: 'nested-url',
    // },
  ],
};

const commonLayoutConfig = {
  ...baseOptions,
  sidebar: {
    // banner: <SharedRootToggle />,
    defaultOpenLevel: 1,
  },
};

// Docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...commonLayoutConfig,
  tree: docsSource.pageTree,
};

// Tutorials layout configuration
export const tutorialsOptions: DocsLayoutProps = {
  ...commonLayoutConfig,
  tree: tutorialsSource.pageTree,
};

// Guides layout configuration
export const guidesOptions: DocsLayoutProps = {
  ...commonLayoutConfig,
  tree: guidesSource.pageTree,
};
