import React from "react";
import { useHistory } from "react-router";
import style from '../styles/App.module.scss';
import { MyButton } from "./UI/MyButton/MyButton";

const PostItem = (props) => {
    const router = useHistory();
    console.log(router);
    return (
        <div className={style.App}>
            <div className={style.post}>
            <div className={style.post__content}>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
                <div className={style.post__btns}>
                    <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                        Открыть
                    </MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem