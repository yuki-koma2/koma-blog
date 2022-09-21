import {usePagination} from "./usePagenation";
import React from "react";

type Props = {
    totalCount: number,
    basePath: string
}

export const Pagination: React.FC<Props> = ({totalCount, basePath}) => {

    const {
        totalPageNumber,
        pageJump
    } = usePagination(totalCount, basePath)


    return (<section>

    </section>)

}