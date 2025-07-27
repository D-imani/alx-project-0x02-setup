import React from "react";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";

const Home : React.FC = () => {
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
        </div>
        
    )
}

export default Home;
