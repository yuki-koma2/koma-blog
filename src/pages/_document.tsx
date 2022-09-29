import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    // NOTE Head にタイトルは書かない。
    return (
        <Html lang="ja">
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="this is a sample"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}