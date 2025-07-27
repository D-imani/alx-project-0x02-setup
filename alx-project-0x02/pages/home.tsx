import React, {useState} from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

const Home : React.FC = () => {
    const [posts, setPosts] = useState<CardProps[]>([
    { title: "Welcome", content: "This is the first post!" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([newPost, ...posts]);
  };
    return (
        <div className="text-center">
            <Header />
            <h1 className="text-2xl font-bold text-pink-600">
                This is the Home Home Page
            </h1>
            <div className="min-h-screen bg-gray-100 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Card One" content="This is the content for the first card." />
      <Card title="Card Two" content="Here's the second card's information." />
      <Card title="Card Three" content="A third card with different content." />
        </div>
        <div className="container mx-auto p-6">
      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        + Add Post
      </button>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
        </div>
        
    )
}

export default Home;
