import { client } from "../../utils/cmsClient";
import { GetStaticProps, NextPage } from "next";

// FIXME データ形式に合わせて治す。
type Props ={
    data:any;
}

const Page: NextPage<Props> = ({data}) => {
        return (
            <div>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                <main>
                    <h1 >{data.contents[0].title}</h1>
                    <p >
                        Get started by editing <code>pages/index.js</code>
                    </p>
                </main>
            </div>
        );
    };

export const getStaticProps: GetStaticProps  = async () => {
    const data = await client.get({
        endpoint: 'blog',
    });

    return {
        props: {
            data,
        },
    };
};

export default Page;