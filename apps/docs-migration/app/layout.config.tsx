import type { HomeLayoutProps } from 'fumadocs-ui/layouts/home'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

import {
  Figma as BrandIcon,
  Code as ESLintIcon,
  Smartphone as HackerPortalIcon,
  Instagram as InstagramIcon,
  AppWindowMac as LandingPageIcon,
  Linkedin as LinkedinIcon,
  Trees as LinktreeIcon,
  SquareKanban as ProjectBoardIcon,
  /* Drill as UtilsIcon, */
} from 'lucide-react'

import Image from 'next/image'

import { AiOutlineDiscord as DiscordIcon } from 'react-icons/ai'
import { SiStorybook as StorybookIcon } from 'react-icons/si'

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
    /* TODO: use cms */
      <>
        <Image
          src="/cuhacking-logo.svg"
          alt="cuHacking logo"
          height={24}
          width={24}
        />
        <span className="text-lg font-bold">cuHacking DevDocs</span>
      </>
    ),
    url: '/',
  },
  links: [
    {
      text: 'Website',
      url: 'https://cuhacking.ca',
      icon: <LandingPageIcon />,
    },
    {
      text: 'Portal',
      url: 'https://portal.cuhacking.ca',
      icon: <HackerPortalIcon />,
    },
    {
      text: 'Design',
      url: 'https://design.cuhacking.ca',
      icon: <StorybookIcon />,
    },
    /* {
     *   text: 'Utils (Coming Soon)',
     *   url: 'https://utils.cuhacking.ca',
     *   icon: <UtilsIcon />,
     * }, */
    {
      text: 'ESLint',
      url: 'https://eslint.cuhacking.ca/rules',
      icon: <ESLintIcon />,
    },
    {
      text: 'Discord',
      url: 'https://discord.gg/h2cQqF9aZf',
      icon: <DiscordIcon />,
      type: 'icon',
    },
    {
      text: 'Instagram',
      url: 'https://www.instagram.com/cuhacking/',
      icon: <InstagramIcon />,
      type: 'icon',
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/company/cuhacking/',
      icon: <LinkedinIcon />,
      type: 'icon',
    },
    {
      text: 'Linktree',
      url: 'https://linktr.ee/cuhacking_',
      icon: <LinktreeIcon />,
      type: 'icon',
    },
    {
      text: 'Brand',
      url: 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1',
      icon: <BrandIcon />,
      type: 'icon',
    },
    {
      text: 'Project Board',
      url: 'https://github.com/orgs/cuhacking/projects/4',
      icon: <ProjectBoardIcon />,
      type: 'icon',
    },
  ],
  githubUrl: 'https://github.com/cuhacking/2025',
}

// home layout configuration
export const homeOptions: HomeLayoutProps = {
  ...baseOptions,
}
