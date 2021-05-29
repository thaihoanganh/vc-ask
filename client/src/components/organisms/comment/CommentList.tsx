import React from "react";

export interface CommentListProps {}

export const CommentList: React.FC<CommentListProps> = ({ children }) => {
  return <div className="m-2">{children}</div>;
};

export default CommentList;
