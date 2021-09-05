import React from "react";
import style from '../styles/App.module.scss';
import { MyButton } from "./UI/MyButton/MyButton";

const PostItem = (props) => {

    return (
        <div className={style.App}>
            <div className={style.post}>
            <div className={style.post__content}>
                <strong>{props.number} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
                <div className={style.post__btns}>
                    <MyButton>Удалить</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem