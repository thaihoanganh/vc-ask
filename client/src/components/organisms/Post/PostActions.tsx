import React from "react";

import SvgIcon from "@components/atoms/SvgIcon";
import Text from "@components/atoms/Text";

export interface PostActionsProps {
  isVoted?: boolean;
  totalComment?: number;
  totalVote?: number;
  onClickComment?: () => void;
  onClickVote?: () => void;
}

export const PostActions: React.FC<PostActionsProps> = ({
  isVoted = true,
  totalComment = 0,
  totalVote = 0,
  onClickComment,
  onClickVote,
}) => {
  const onHandleClickComment = () => {
    onClickComment && onClickComment();
  };

  const onHandleClickVote = () => {
    onClickVote && onClickVote();
  };

  return (
    <div className="flex items-end m-2">
      <div className="flex items-center mr-8 cursor-pointer" onClick={onHandleClickVote}>
        <SvgIcon className="transform rotate-270 w-7 h-7" size="small">
          {isVoted ? (
            <path d="M12 8V6.41c0-.89 1.08-1.34 1.71-.71l5.59 5.59c.39.39.39 1.02 0 1.41l-5.59 5.59c-.63.63-1.71.19-1.71-.7V16H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h7z" />
          ) : (
            <path d="M14 8.83L17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z" />
          )}
        </SvgIcon>
        <span className="ml-2">
          <Text color="secondary">{totalVote}</Text>
        </span>
      </div>
      <div className="flex items-center cursor-pointer" onClick={onHandleClickComment}>
        <SvgIcon size="small">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
        </SvgIcon>
        <span className="ml-2">
          <Text color="secondary">{totalComment}</Text>
        </span>
      </div>
    </div>
  );
};

export default PostActions;
