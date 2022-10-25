import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next';
import { CssBaseline } from "@nextui-org/react";

// const stylesServer = createStylesServer();
const getInitialProps = createGetInitialProps();

export default class _Document extends Document {

    static getInitialProps = getInitialProps;
    // static async getInitialProps(ctx: DocumentContext) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //
    //     // Add your app specific logic here
    //
    //     return {
    //         ...initialProps,
    //         styles: [
    //             initialProps.styles,
    //             <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
    //         ],
    //     };
    // }

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