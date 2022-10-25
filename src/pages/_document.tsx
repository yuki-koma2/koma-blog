import Document,{ Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
static getInitialProps = getInitialProps;
    // NOTE Head にタイトルは書かない。
    // return (
    //     <Html lang="ja">
    //         <Head>
    //             <meta charSet="utf-8" />
    //             <meta name="description" content="this is a sample"/>
    //             <link rel="icon" href="/public/favicon.ico"/>
    //         </Head>
    //         <body>
    //         <Main />
    //         <NextScript />
    //         </body>
    //     </Html>
    // )
    render() {
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
        );
    }
}