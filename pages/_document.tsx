import { Html, Head, Main, NextScript } from 'next/document'

// https://nextjs.org/docs/advanced-features/custom-document

export default function Document(context: any) {
  const locale = context?.__NEXT_DATA__?.query?.locale;

  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}