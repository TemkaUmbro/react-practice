import React, { useMemo, useState } from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import style from './styles/App.module.scss'
import PostList from './Components/PostList';
import { MyButton } from './Components/UI/MyButton/MyButton';
import { MyInput } from './Components/UI/MyInput/MyInput';
import { PostForm } from './Components/PostForm';
import { MySelect } from './Components/UI/Select/MySelect';
import { PostFilter } from './Components/PostFilter';
import MyModal from './MyModal/MyModal';

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: '222', body: '123 JavaScript - язык программирования'},
    {id: 2, title: '111', body: '456 JavaScript - язык программирования'},
    {id: 3, title: '44', body: '07890 JavaScript - язык программирования'},
  ]);
  
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id));
  };

  return (
    <div className={style.App}>
      <MyButton onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
    </div>
  )
}

export default App;