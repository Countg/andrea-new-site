import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    title: 'Market Your Dream',
    description: `Be where the world is going `,
    image: '/Logo_1@2x.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://marketyourdream.ca${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://marketyourdream.ca${router.asPath}`}
        />

        <meta property='og:type' content={meta.type} />
        <meta
          property='og:site_name'
          content='Market Your Dream: Be where the world is going'
        />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>

      <div>{children}</div>
    </div>
  );
}
