import { useState } from 'react';
import PostsList from './features/posts/postsList';
import AddPostForm from './features/posts/addPostForm';


function App() {

  return (
    <>
    <main className='App'>
      <AddPostForm />
      <PostsList />

    </main>
    </>
  )
}

export default App
