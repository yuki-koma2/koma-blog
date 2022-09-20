import { client } from "../../utils/cmsClient";
import { GetStaticProps, NextPage } from "next";
import { blogContentForList, CmsAdditionalResponse } from "../../types/cms";

type Props = {
    contents: Array<blogContentForList>
};

type CmsResponse = Props & CmsAdditionalResponse;

const Page: NextPage<Props> = ({contents}) => {
        return (
            <>
                    <h1 >{contents[0].title}</h1>
                    <p>{contents[0].publishedAt}</p>
                    <p>{contents[0].explain}</p>
                    <p >
                        Get started by editing <code>pages/index.js</code>
                    </p>
            </>
        );
    };

export const getStaticProps: GetStaticProps  = async () => {
    // ref https://document.microcms.io/content-api/get-list-contents#h91d3988597
    // ページングが必要な場合 limit: 10, offset: 0,
    const data : CmsResponse = await client.get({
        endpoint: 'blog',
        queries: {fields: 'id,title,publishedAt,updatedAt,explain' }
    });

    return {
        props: {
            contents: data.contents,
        },
    };
};

export default Page;