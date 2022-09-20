import React from "react";
import { blogContent } from "../../../types/cms";
import Link from "next/link";

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
            <footer>
                {post.tags.map(tagInfo => {
                    return (
                        <Link href={'/blog?tag=' + tagInfo.id} key={tagInfo.id}>
                            <p>&rarr;  {tagInfo.tag}</p>
                        </Link>
                    )
                })}
            </footer>
        </>
    )

}