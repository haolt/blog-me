import Link from "next/link";
import { SITE_CONFIGS } from "@/constants";

export default function SiteNav() {
  return (
    <>
      <Link href="/" className="inline-block text-2xl font-black transition-transform duration-200 ease-in-out active:scale-100">
        <h1 className="gradient-text">
          {SITE_CONFIGS.title}
        </h1>
      </Link>
      <Link href="/dm">
        <span>{SITE_CONFIGS.contact}</span>
      </Link>
    </>
  );
};
