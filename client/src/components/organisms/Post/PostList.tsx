import React from "react";

export interface PostListProps {}

export const PostList: React.FC<PostListProps> = ({ children }) => {
  return <div className="xl:w-960 mx-auto py-2 xl:px-2 border-r-0 border-l-0">{children}</div>;
};

export default PostList;
