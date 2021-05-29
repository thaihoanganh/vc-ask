import React from "react";

import View from "@components/atoms/View";

export interface PostProps {}

export const Post: React.FC<PostProps> = ({ children }) => {
  return (
    <View className="my-4 p-2" color="primary" bordered>
      {children}
    </View>
  );
};

export default Post;
