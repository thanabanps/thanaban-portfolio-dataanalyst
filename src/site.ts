/** Personal details used across the site. Edit here, not in the pages. */
export const SITE = {
  name: 'Thanaban Promsuan',
  nameThai: 'ธนบรรณ',
  short: 'THANABAN',
  tagline: 'DATA · AI · AUTOMATION · WEB — BANGKOK',
  banner: 'OPEN TO NEW OPPORTUNITIES IN BANGKOK',
  description:
    'Portfolio of Thanaban Promsuan — dashboards, AI-built tools, automations and web apps that solve real problems at work.',
  email: 'Thanaban.ps@gmail.com',
  github: 'https://github.com/thanabanps',
  /** Leave empty to hide the LinkedIn link. */
  linkedin: '',
  /** Path under /public. Leave empty to hide the CV buttons. */
  cv: '',
  location: 'Bangkok, Thailand',
};

/** Prefix a site path with the deploy base (GitHub Pages sub-path). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
