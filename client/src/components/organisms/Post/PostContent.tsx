import React from "react";

import Text from "@components/atoms/Text";

export interface PostContentProps {}

export const PostContent: React.FC<PostContentProps> = ({ children }) => {
  return (
    <div className="m-2">
      <Text>{children}</Text>
    </div>
  );
};

export default PostContent;
