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
            <hr/>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </>
    )

}