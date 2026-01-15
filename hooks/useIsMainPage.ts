import { usePathname } from 'next/navigation';

export default function useIsMainPage() {
  const pathname = usePathname();

  return (/^\/(dm)?$/.test(pathname));
};
