import styles from './page.module.css';

const mockPost = {
  title: 'Introducing RSC Explorer',
  date: 'December 19, 2025',
  content: 'In the past few weeks, since the disclosure of the critical security vulnerability in React Server Components (RSC), there’s been a lot of interest in the RSC protocol. The RSC protocol is the format in which React trees (and a superset of JSON) get serialized and deserialized by React. React provides both a writer and a reader for the RSC protocol, which are versioned and evolved in lockstep with each otbeen a lot of interest in the RSC protocol. The RSC protocol is the format in which React trees (and a superset of JSON) get serialized and deserialized by React. React provides both a writer and a reader for the RSC protocol, which are versioned and evolved in lockstep with each other. Because the RSC protocol is an implementatio the format in which React trees (and a superset of JSON) get serialized and deserialized by not explicitly documented outside the source codebeen a lot of interest in the RSC protocol. The RSC ps the format in which React trees (and a superset of JSON) get serialized and deserialized by React. React provides boh a writer and a readtocol, which are versioned and evolved in lockstep with each other. Because the RSC protocol is an implementation detail of React, it is not explicitly documented outside the source codeher. Because the RSC protocol is an implementation detail of React, it is not explicitly documented outside the source code. The benefit of this approach is that React has a lot of leeway to improve the format and add new features and optimizations to it.',
};

export default function PostDetail() {
  return (
    <>
      <h2 className={`${styles.title} font-title`}>{mockPost.title}</h2>
      <p className={`${styles.date} font-body mt-2`}>{mockPost.date}</p>
      <p className={`${styles.content} font-body mt-12`}>{mockPost.content}</p>
    </>
  );
};
