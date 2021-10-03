import React, { useEffect, useMemo, useState } from 'react';
import style from './Posts.module.scss';
import PostList from '../Components/PostList';
import { MyButton } from '../Components/UI/MyButton/MyButton';
import { PostForm } from '../Components/PostForm';
import { PostFilter } from '../Components/PostFilter';
import MyModal from '../Components/UI/MyModal/MyModal';
import { usePosts } from '../Components/hooks/usePosts';
import PostsServise from '../API/PostServise';
import { Loader } from '../Components/UI/Loader/Loader';
import { useFetching } from '../Components/hooks/useFetching';
import { getPageCount } from '../utils/pages';
import { Pagination } from '../pagination/Pagination';


const About = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);  
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostsServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts();
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id));
  };

  const changePages = (page) => {
    setPage(page);
  };

  return (
    <div className={style.Posts}>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1>Произошла ошибка!</h1>  
      }
      {isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 70}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
      }
      <Pagination page={page} changePages={changePages} totalPages={totalPages} />
    </div>
  )
}

export default About;