import React from "react";

import Avatar from "@components/atoms/Avatar";
import Text from "@components/atoms/Text";

export interface PostHeaderProps {
  pictureProfileUrl: string;
  username: string;
  time: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ pictureProfileUrl, username, time }) => {
  return (
    <header className="flex items-center m-2">
      <div className="flex">
        <Avatar avatarUrl={pictureProfileUrl} />
      </div>
      <div className="flex-grow ml-4">
        <Text className="font-medium">{username}</Text>
      </div>
      <div>
        <Text size="small" color="secondary">
          {time}
        </Text>
      </div>
    </header>
  );
};

export default PostHeader;
