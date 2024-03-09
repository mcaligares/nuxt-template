import { appConfig } from '~/config/app';

export default function useAppFooter() {
  const { name, copyright, contact } = appConfig;

  return {
    items: contact,
    copyright: `${copyright} - ${name}`
  };
}
