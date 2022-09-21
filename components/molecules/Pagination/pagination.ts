/**
 * ５つごとにページ分けをする。
 * @param totalCount
 * @param basePath
 */
import {useCallback, useMemo} from "react";
import {useRouter} from "next/router";
import {CONTENTS_PER_PAGE} from "../../../utils/pagination";

export const usePagination = (totalCount: number, basePath: string) => {
    const router = useRouter()

    const totalPageNumber = useMemo(() => {
        return totalCount / CONTENTS_PER_PAGE
    }, [totalCount])

    const pageJump = useCallback((jumpToPage:number)=>{
        router.replace(basePath + '?page=' + jumpToPage).then().catch()
     },[])

    return {
        totalPageNumber,
        pageJump
    }

}