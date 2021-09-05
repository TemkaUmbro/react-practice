import React, { useState } from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import style from './styles/App.module.scss'
import PostList from './Components/PostList';
import { MyButton } from './Components/UI/MyButton/MyButton';
import { MyInput } from './Components/UI/MyInput/MyInput';

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'JavaScript 1 - язык программирования'},
    {id: 2, title: 'JS', body: 'JavaScript 2 - язык программирования'},
    {id: 3, title: 'JS', body: 'JavaScript 3 - язык программирования'},
  ]);

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title:'', body:'' })
  }

  return (
    <div className={style.App}>
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value})}
          type='text'
          placeholder='Название поста' />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value})}
          type='text'
          placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
        <PostList posts={posts} title='Cписок постов' />
    </div>
  )
}

export default App;