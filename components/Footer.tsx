"use client";
import SiteNav from '@/components/SiteNav';
import useIsMainPage from "@/hooks/useIsMainPage";

export default function Footer() {
  const isMainPage = useIsMainPage();

  if (!!isMainPage) return null;

  return (
    <footer className="mt-20 flex flex-row place-content-between">
      <SiteNav />
    </footer>
  );
};
