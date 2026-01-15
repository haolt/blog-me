import { SOCIAL_LINKS } from '@/constants';
import styles from './page.module.css';
import Link from 'next/dist/client/link';

export default function Contact() {
  return (
    <>
      <div className="flex gap-2">
        <span className="font-body font-title mb-2">Find me via:</span>
        {
          SOCIAL_LINKS.map(({
            name, url
          }) => (
            <a target="_blank" href={url} key={url} className={`${styles.contactLink} font-body`} title={name}>
              {name}
            </a>
          ))
        }
      </div>
      <Link href="/" className={`${styles.contactLink} font-body`}>
        ← Home page
      </Link>
    </>
  );
};
