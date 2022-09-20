
import { ReactNode } from "react";


/**
 * ブログの全てのフィールド
 * サンプル値
 *             "id": "c6b3vfesez",
 *             "createdAt": "2020-08-22T15:19:24.191Z",
 *             "updatedAt": "2020-08-23T07:47:03.841Z",
 *             "publishedAt": "2020-08-22T15:19:24.191Z",
 *             "title": "タイトル仮",
 *             "explain": "説明文",
 *             "content": "<p>いろいろかける</p>",
 */
export type blogContent = {
    id:string,
    createdAt:string,
    updatedAt:string,
    publishedAt:string,
    title:string,
    explain:string,
    content:ReactNode,
    "content_image":blogContentImage
}

// 一覧取得時のフィールド
export type blogContentForList = {
    id:string,
    updatedAt:string,
    publishedAt:string,
    title:string,
    explain:string,
}

export type blogContentImage = {
    url :string,
    height: number,
    width: number
}

export type CmsAdditionalResponse = {
    totalCount: number,
    offset: number,
    limit: number,
}