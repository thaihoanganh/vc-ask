import React from "react";

export interface CommentLoadingProps {}

const CommentLoading: React.FC<CommentLoadingProps> = () => {
  return (
    <div className="flex">
      <div className="w-8 h-8 rounded-t-full rounded-b-full bg-gray-300 dark:bg-gray-600" />
      <div className="ml-4">
        <div className="flex mb-1">
          <div className="w-24 h-4 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="w-32 h-4 rounded ml-4 bg-gray-300 dark:bg-gray-600" />
        </div>
        <div className="flex mt-1">
          <div className="w-12 h-3 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="w-10 h-3 ml-4 rounded bg-gray-300 dark:bg-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default CommentLoading;
