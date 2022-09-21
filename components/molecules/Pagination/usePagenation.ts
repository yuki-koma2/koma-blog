/**
 * ５つごとにページ分けをする。
 * @param totalCount
 * @param basePath
 */
import {useCallback, useMemo, useState} from "react";
import {useRouter} from "next/router";
import {CONTENTS_PER_PAGE} from "../../../utils/pagination";
import {type} from "os";

type PagingItem = {
    index :number,
    selected:boolean,
    onClick:()=>void,
    isDisplay:boolean,
}

type PagingItems = Array<PagingItem>

export const usePagination = (totalCount: number, basePath: string) => {
    const router = useRouter()

    const selectedPage = useState(1);

    const totalPageNumber = useMemo(() => {
        return totalCount / CONTENTS_PER_PAGE
    }, [totalCount])

    // 共通処理
    const onClickTargetPage = useCallback((jumpToPage:number)=>{
        router.replace(basePath + '?page=' + jumpToPage).then().catch()
     },[])

    // 次のページへ
    const onClickNextPage = () => {

    }

    //前のページへ
    const onClickPreviewsPage = () => {

    }


    // https://github.com/AdeleD/react-paginate/blob/master/react_components/PaginationBoxView.js


    return {
        totalPageNumber,
    }

}