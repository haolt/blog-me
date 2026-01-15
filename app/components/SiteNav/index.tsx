"use client";
import Link from "next/link";
import useIsMainPage from "@/app/hooks/useIsMainPage";
import { SITE_CONFIGS } from "@/constants";
import "./styles.css";

export default function SiteNav() {
  const isMainPage = useIsMainPage();

  return (
    <>
      <Link href="/" className="inline-block text-2xl font-black transition-transform duration-200 ease-in-out active:scale-100">
        <h1 className={`font-title site-nav__title ${!isMainPage ? 'site-nav__title--gradient' : ''}`}>
          {SITE_CONFIGS.title}
        </h1>
      </Link>
      <Link href="/dm">
        <span className="font-body site-nav__dm">{SITE_CONFIGS.contact}</span>
      </Link>
    </>
  );
};
