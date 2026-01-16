import Link from "next/dist/client/link";
import { SOCIAL_LINKS } from "@/constants";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <>
      <div className="flex gap-2">
        <span className="font-body font-title mb-2">Feel free to DM me via</span>
        {
          SOCIAL_LINKS.map(({
            name, url
          }, index) => (
            <span key={url}>
              <a target="_blank" href={url} className={`${styles.contactLink} font-body`} title={name}>
                {name}
              </a>
              {index < SOCIAL_LINKS.length - 1 ? ' · ' : '.'}
            </span>
          ))
        }
      </div>
      <Link href="/" className={`${styles.contactLink} font-body`}>
        ← Home page
      </Link>
    </>
  );
};
