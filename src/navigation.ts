import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Blog',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'All Posts', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    Licensed under CC BY-NC 4.0.
  `,
};
