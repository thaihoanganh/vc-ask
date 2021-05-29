import React from "react";

import View from "@components/atoms/View";

export interface PostLoadingProps {}

export const PostLoading: React.FC<PostLoadingProps> = () => {
  return (
    <View className="my-4 p-2" color="primary" bordered>
      <View className="flex items-center m-2">
        <View className="w-8 h-8 rounded-t-full rounded-b-full" color="secondary" />
        <View className="w-24 h-4 ml-4 rounded" color="secondary" />
      </View>
      <View className="m-2">
        <View className="w-full h-4 my-1 rounded" color="secondary"></View>
        <View className="w-3/5 h-4 my-1 rounded" color="secondary"></View>
      </View>
      <View className="flex m-2">
        <View className="flex items-end">
          <View className="w-5 h-5 rounded" color="secondary"></View>
          <View className="w-8 h-4 ml-2 rounded" color="secondary"></View>
        </View>
        <View className="flex items-end ml-8">
          <View className="w-5 h-5 rounded" color="secondary"></View>
          <View className="w-8 h-4 ml-2 rounded" color="secondary"></View>
        </View>
      </View>
    </View>
  );
};

export default PostLoading;
