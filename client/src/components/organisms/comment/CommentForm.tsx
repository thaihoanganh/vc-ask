import React from "react";

import Avatar from "@components/atoms/Avatar";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";

export interface CommentFormProps {}

export const CommentForm: React.FC<CommentFormProps> = () => {
  return (
    <div className="flex items-center my-2">
      <div className="flex">
        <Avatar avatarUrl="https://picsum.photos/32/32" />
      </div>
      <div className="flex-grow mx-4">
        <Input className="rounded" fullWidth />
      </div>
      <div>
        <Button type="submit" className="rounded">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CommentForm;
