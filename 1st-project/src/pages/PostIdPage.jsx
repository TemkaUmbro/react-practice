import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostsService from "../API/PostServise";
import { useFetching } from "../Components/hooks/useFetching";
import { Loader } from "../Components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const[post, setPost] = useState({});
    const[comments, setComments] = useState([]);

    const[fetchPostsById, isLoading, error] = useFetching( async (id) => {
        const response = await PostsService.getById(id);
        setPost(response.data);
    });
    const[fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostsService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostsById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>Пост ID: {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm => {
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <h4>{comm.body}</h4>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}

export default PostIdPage