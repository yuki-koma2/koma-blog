import { client } from "../../utils/cmsClient";
import { GetServerSideProps, NextPage } from "next";
import { blogContentForList, CmsAdditionalResponse } from "../../types/cms";
import { BlogList } from "../../feature/blog/BlogList";
import { pageNumberToQueryConverter } from "../../utils/pagination";

type Props = {
    contents: Array<blogContentForList>,
    totalCount: number,
    pageNumber: number,
};

type CmsResponse = Props & CmsAdditionalResponse;

const Page: NextPage<Props> = ({contents, totalCount, pageNumber}) => {
    return (<BlogList contents={contents} totalCount={totalCount} pageNumber={pageNumber}/>);
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const tagId = query.tag as String;
    const pageNumber = Number(query.page);
    // ref https://document.microcms.io/content-api/get-list-contents#h91d3988597
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
            totalCount: data.totalCount,
            pageNumber: pageNumber
        },
    };
};

export default Page;