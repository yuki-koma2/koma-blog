import React from 'react';
import styleModule from './HoverCard.module.scss';
// NOTE : This is a sample component.
// TODO: カードの枠にうっすらグラデーションのボーダーをつけようとしたが、この方法だとうまくいかなそうなので気が向いたらちゃんと作る
export default function HoverCard() {
    return (
        <div className={styleModule.container}>
            <div className={styleModule.card}>
                Card
            </div>
        </div>
    );
}