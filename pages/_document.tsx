import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "ProfessionalService",
              "name": "Tim Dobson",
              "description": "Tim Dobson offers professional services in IT and business development.",
              "image": "/favicon.png",
              "url": "https://www.tdobson.net",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Manchester",
                "addressCountry": "UK"
              },
              "telephone": "+44 1457 597007"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
