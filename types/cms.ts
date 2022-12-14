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
    id: string,
    createdAt: string, // TODO 日付変換と型付け
    updatedAt: string,
    publishedAt: string,
    title: string,
    explain: string,
    content: string, // htmlで帰ってくる
    "content_image": blogContentImage
    tags: Array<tagInfo>
}

export type tagInfo = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    tag: string
}

// 一覧取得時のフィールド
export type blogContentForList = {
    id: string,
    updatedAt: string,
    publishedAt: string,
    title: string,
    explain: string,
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