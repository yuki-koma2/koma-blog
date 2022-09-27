/**
 * ５つごとにページ分けをする。
 * @param totalCount
 * @param basePath
 */
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { CONTENTS_PER_PAGE } from "../../../utils/pagination";

type PagingItem = {
    pageNumber:number,
    isCurrentPage:boolean,
    onClick:()=>void,
    redirectTo:string,
    isDisplay:boolean,
}

type PagingItems = Array<PagingItem>

export const usePagination = (totalCount: number, basePath: string, selectedPageNumber?:number) => {
    const router = useRouter()

    const [selectedPage,setSelectPage] = useState(selectedPageNumber ?? 1);

    // TODO: CONTENTS_PER_PAGE を可変にする場合、propsで受け取るようにする。
    const totalPageNumber = useMemo(() => {
        return totalCount / CONTENTS_PER_PAGE
    }, [totalCount])

    // 共通処理
    const onClickTargetPage = useCallback((jumpToPage:number)=>{
        setSelectPage(jumpToPage);
        router.replace(basePath + '?page=' + jumpToPage).then().catch()
     },[basePath, router])

    // 次のページへ
    const onClickNextPage = useCallback(() => {
        const nextPage = selectedPage + 1
        onClickTargetPage(nextPage)
    },[onClickTargetPage, selectedPage])

    //前のページへ
    const onClickPreviewsPage = useCallback(() => {
        const previewsPage = selectedPage - 1
        onClickTargetPage(previewsPage)
    },[onClickTargetPage, selectedPage])

    // 最初のページへ
    const onClickFirstPage = useCallback(() => {
        onClickTargetPage(1)
    }   ,[onClickTargetPage])

    // 最後のページへ
    const onClickLastPage = useCallback(() => {
        onClickTargetPage(totalPageNumber)
    },[onClickTargetPage, totalPageNumber])


    const pagingItems = useMemo<PagingItems>(() => {
        const items = []
        for(let i = 1; i <= totalPageNumber; i++){
            items.push({
                pageNumber:i,
                isCurrentPage:i === selectedPage,
                onClick:()=>onClickTargetPage(i),
                redirectTo:basePath + '?page=' + i,
                isDisplay:true
            })
        }
        return items
    }, [totalPageNumber, selectedPage, onClickTargetPage])

    return {
        totalPageNumber,
        onClickNextPage,
        onClickPreviewsPage,
        onClickFirstPage,
        onClickLastPage,
        pagingItems,
    }

}