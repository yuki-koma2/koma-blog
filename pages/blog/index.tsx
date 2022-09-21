import { client } from "../../utils/cmsClient";
import { GetServerSideProps, NextPage } from "next";
import { blogContentForList, CmsAdditionalResponse } from "../../types/cms";
import { BlogList } from "../../feature/blog/BlogList";
import {pageNumberToQueryConverter} from "../../utils/pagination";

type Props = {
    contents: Array<blogContentForList>
};

type CmsResponse = Props & CmsAdditionalResponse;

const Page: NextPage<Props> = ({contents}) => {
    return (<BlogList contents={contents}/>);
    };

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const tagId = query.tag as String;
    const pageNumber = Number(query.page);
    // ref https://document.microcms.io/content-api/get-list-contents#h91d3988597
    // ページングが必要な場合 limit: 10, offset: 0,
    const data: CmsResponse = await client.get({
        endpoint: 'blog',
        queries: {
            fields: 'id,title,publishedAt,updatedAt,explain',
            filters: tagId ? 'tags[contains]' + tagId : undefined,
            offset: isNaN(pageNumber) ? 0 : pageNumberToQueryConverter(pageNumber).offset,
            limit: isNaN(pageNumber) ? undefined : pageNumberToQueryConverter(pageNumber).limit
        }
    });

    return {
        props: {
            contents: data.contents,
        },
    };
};

export default Page;