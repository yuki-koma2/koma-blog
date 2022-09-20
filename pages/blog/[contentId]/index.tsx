import { GetServerSideProps, NextPage } from "next";
import { blogContent } from "../../../types/cms";
import { client } from "../../../utils/cmsClient";
import { BlogContent } from "../../../feature/blog/content/BlogContent";

type Props = {
    post: blogContent
};

const Page: NextPage<Props> = ({post}) => {
    return (<BlogContent post={post}/>);
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    if (!params?.contentId || params?.contentId === '') {
        return {
            notFound: true,
        }
    }

    const contentId = params?.contentId as string;
    // ref https://document.microcms.io/content-api/get-list-contents#h91d3988597
    try {
        const data = await client.get({
            endpoint: 'blog',
            contentId: contentId,
        }).catch(error => {
            throw new Error(error)
        })
        return {
            props: {
                post: data
            },
        };
    } catch (e) {
        return {
            notFound: true,
        }
    }

};

export default Page;