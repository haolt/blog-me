"use client";
import { usePathname } from 'next/navigation';
import SiteNav from '@/app/components/SiteNav';

export default function Footer() {
  const pathname = usePathname();

  const hideFooter = /^\/(dm)?$/.test(pathname);

  if (hideFooter) return null;

  return (
    <footer className="mt-20 flex flex-row place-content-between">
      <SiteNav />
    </footer>
  );
};
