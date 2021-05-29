import React from "react";

import Avatar from "@components/atoms/Avatar";
import Text from "@components/atoms/Text";

export interface CommentProps {
  commentContent?: string;
  pictureProfileUrl?: string;
  username?: string;
}

export const Comment: React.FC<CommentProps> = ({
  children,
  commentContent = "Lorem",
  pictureProfileUrl = "https://picsum.photos/32/32",
  username = "thaihoanganh",
}) => {
  return (
    <div className="flex my-2">
      <div className="flex">
        <Avatar avatarUrl={pictureProfileUrl} />
      </div>
      <div className="flex-grow ml-4">
        <div className="my-1">
          <Text className="font-medium">{username}</Text>
          <Text className="ml-1">{commentContent}</Text>
        </div>
        <div className="flex my-1">
          <Text className="mr-4 font-medium" color="secondary" size="small">
            2 hours
          </Text>
          <Text className="font-medium" color="secondary" size="small">
            Trả lời
          </Text>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Comment;
