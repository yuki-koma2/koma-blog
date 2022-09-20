import { blogContentForList } from "../../types/cms";
import React from "react";
import Link from "next/link";

type Props = {
    contents: Array<blogContentForList>
};

export const BlogList: React.FC<Props> = ({contents}) => {
    return (
        <>
            <section>
                <h1>記事一覧</h1>
                <hr/>
            </section>
            <section>
                {contents.map(post => {
                    return (
                        <>
                            <h2> {post.title}</h2>
                            <p>{post.explain}</p>
                            <p>published at : {post.publishedAt}</p>
                            <Link href={'/blog/' + post.id}>&rarr; see detail</Link>
                            <hr/>
                        </>
                    )
                })}
            </section>
        </>
    )

}