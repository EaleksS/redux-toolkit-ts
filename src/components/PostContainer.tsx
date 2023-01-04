import React, { useState, useEffect } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    error,
    isLoading,
	refetch
  } = postAPI.useFetchAllPostsQuery(limit);

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 3000);
  }, []);

  return (
    <div className="post__list">
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
