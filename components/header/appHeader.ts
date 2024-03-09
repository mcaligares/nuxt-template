import { appConfig } from '~/config/app';

export default function useAppHeader() {
  const router = useRouter();
  const { name, menu } = appConfig;

  return {
    title: name,
    menu: menu.map(item => ({
      ...item,
      icon: `pi ${item.icon}`,
      command: () => {
        router.push(item.link);
      }
    }))
  };
}
