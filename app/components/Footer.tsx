"use client";
import SiteNav from '@/app/components/SiteNav';
import useIsMainPage from "@/app/hooks/useIsMainPage";

export default function Footer() {
  const isMainPage = useIsMainPage();

  if (!!isMainPage) return null;

  return (
    <footer className="mt-20 flex flex-row place-content-between">
      <SiteNav />
    </footer>
  );
};
