import Image from "next/image";
import React from "react";
import { blogContent } from "../../../types/cms";

type Props = {
    post: blogContent
};

export const BlogContent: React.FC<Props> = ({post}) => {
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
    )

}