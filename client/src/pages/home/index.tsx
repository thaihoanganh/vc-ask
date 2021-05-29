import React from "react";
import Post, { PostActions, PostContent, PostForm, PostHeader, PostList } from "@components/organisms/Post";

const HomePage: React.FC = () => {
  return (
    <PostList>
      <PostForm />
      <Post>
        <PostHeader pictureProfileUrl="https://picsum.photos/200/300" username="hoanganh" time="5 hours ago" />
        <PostContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Nostrum, nisi. Delectus neque
          illo vitae adipisci dicta? Facere quas aspernatur itaque fugiat! Molestiae velit quod fugit, culpa iusto
          voluptates!
        </PostContent>
        <PostActions />
      </Post>
    </PostList>
  );
};

export default HomePage;
