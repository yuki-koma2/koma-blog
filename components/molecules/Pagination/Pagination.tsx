import { usePagination } from "./usePagenation";
import React from "react";
import Link from "next/link";

type Props = {
    totalCount: number,
    basePath: string,
    selectedPageNumber: number,
}

export const Pagination: React.FC<Props> = ({totalCount, basePath,selectedPageNumber}) => {

    const {
        onClickNextPage,
        onClickPreviewsPage,
        onClickFirstPage,
        onClickLastPage,
        pagingItems,
    } = usePagination(totalCount, basePath,selectedPageNumber);

    return (
        <section>
            <ul className="flex justify-center">
                <li><span onClick={onClickPreviewsPage}>prev</span></li>
                <li><span onClick={onClickFirstPage}>first</span></li>
                <li>{pagingItems.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {item.isCurrentPage ?
                                <span >{item.pageNumber}</span>
                                :
                                <Link href={item.redirectTo}>{item.pageNumber}</Link>
                            }
                        </React.Fragment>
                    )
                })}
                </li>
                <li><span onClick={onClickNextPage}>next</span></li>
                <li><span onClick={onClickLastPage}>last</span></li>
            </ul>
    </section>)
}