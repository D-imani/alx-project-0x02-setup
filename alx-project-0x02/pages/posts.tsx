import React, {useEffect, useState} from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts : React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await response.json();

      // Map API response to PostProps format
      const formattedPosts = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
{posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
};
 export default Posts;