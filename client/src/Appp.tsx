import React from "react";

import Layout, { LayoutHeader } from "@components/templates/Layout";
import Header, { HeaderLogo, HeaderNav } from "@components/organisms/Header";
import Post, { PostHeader, PostList, PostContent, PostActions, PostForm } from "@components/organisms/Post";
import Comment, { CommentForm, CommentList } from "@components/organisms/comment";
import PostLoading from "@components/organisms/Post/PostLoading";
import CommentLoading from "@components/organisms/comment/CommentLoading";

const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <LayoutHeader>
          <Header>
            <HeaderLogo />
            <HeaderNav themeMode="light" />
          </Header>
        </LayoutHeader>
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
            <CommentList>
              <Comment></Comment>
              <Comment></Comment>
              <Comment></Comment>
              <CommentLoading />
              <CommentForm />
            </CommentList>
          </Post>
          <PostLoading />
        </PostList>
      </Layout>
    </div>
  );
};

export default App;
