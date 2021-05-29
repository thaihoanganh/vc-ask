import React from "react";

import View from "@components/atoms/View";
import Button from "@components/atoms/Button";

export interface PostFormProps {}

export const PostForm: React.FC<PostFormProps> = () => {
  return (
    <View className="my-4 p-4" color="primary" bordered>
      <View className="overflow-hidden h-20 rounded" bordered>
        <View
          as="textarea"
          className="w-full h-full p-2 outline-none resize-none text-gray-900 dark:text-gray-100"
          placeholder="Ask me anything"
          color="primary"
        />
      </View>
      <div className="flex justify-end py-2">
        <Button className="rounded">Post</Button>
      </div>
    </View>
  );
};

export default PostForm;
