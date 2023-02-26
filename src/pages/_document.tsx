import Document, { Head, Html, Main, NextScript } from 'next/document'
import { CssBaseline } from "@nextui-org/react";

export default class _Document extends Document {
    // NOTE Head にタイトルは書かない。
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="this is a sample"/>
                    <link rel="icon" href="/public/favicon.ico"/>
                    {CssBaseline.flush()}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}