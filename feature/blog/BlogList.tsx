import { blogContentForList } from "../../types/cms";
import React from "react";

type Props = {
    contents: Array<blogContentForList>
};

export const BlogList: React.FC<Props> = ({contents}) => {
    return (
        <>
            <h1>{contents[0].title}</h1>
            <p>{contents[0].publishedAt}</p>
            <p>{contents[0].explain}</p>
            <p>
                Get started by editing <code>pages/index.js</code>
            </p>
        </>
    )

}