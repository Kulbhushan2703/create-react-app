import React from 'react';
import Home from './components/Home';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './container.css';

function App() {
  return (
 <div className='topbarContainer'>
  <Home />
  <PostList />
  <PostForm />
  </div>
  )
}

export default App;