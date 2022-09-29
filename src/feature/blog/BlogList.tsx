import { blogContentForList } from "../../../types/cms";
import React from "react";
import Link from "next/link";
import { routes } from "../../routes";
import { Pagination } from "../../components/molecules/Paging/Pagination";


type Props = {
    contents: Array<blogContentForList>,
    totalCount: number,
    pageNumber: number,
};

export const BlogList: React.FC<Props> = ({contents, totalCount, pageNumber}) => {
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
            <footer>
                <Pagination totalCount={totalCount} basePath={routes.blog.path()} selectedPageNumber={pageNumber}/>
            </footer>
        </>
    )

}