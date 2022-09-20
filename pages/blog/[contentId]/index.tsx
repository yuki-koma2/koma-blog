import { GetServerSideProps, NextPage } from "next";
import { blogContent } from "../../../types/cms";
import Image from "next/image";
import { client } from "../../../utils/cmsClient";

type Props = {
    post: blogContent
};


const Page: NextPage<Props> = ({post}) => {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.publishedAt}</p>
            <p>{post.explain}</p>
            <Image src={post.content_image.url} alt={'blog image '} width={post.content_image.width}
                   height={post.content_image.height}/>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
            <p>
                Get started by editing <code>pages/index.js</code>
            </p>
        </>
    );
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