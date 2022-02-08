import React from 'react';
import { useSelector } from 'react-redux';
import AppLayouts from '../components/layout/AppLayouts';
import PostCard from '../components/post/PostCard';
import PostForm from '../components/post/PostForm';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayouts>
      { isLoggedIn && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayouts>
  );
};

export default Home;
