import React from "react";

import { PostList, PostLoading } from "@components/organisms/Post";

const HomePageLoading: React.FC = () => {
  return (
    <PostList>
      <PostLoading />
      <PostLoading />
      <PostLoading />
      <PostLoading />
    </PostList>
  );
};

export default HomePageLoading;
