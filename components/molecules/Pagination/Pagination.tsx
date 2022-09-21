import {usePagination} from "./pagination";
import React from "react";

type Props = {
    totalCount:number,
    basePath:string
}

export const Pagination:React.FC<Props> = ({totalCount,basePath}) => {

    usePagination(totalCount,basePath)


    return (<section>
        1
    </section>)

}