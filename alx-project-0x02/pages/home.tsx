import React from "react";
import Header from "@/components/layout/Header";

const Home : React.FC = () => {
    return (
        <div className="text-center">
            <Header />
            <h1 className="text-2xl font-bold text-pink-600">
                This is the Home Home Page
            </h1>
        </div>
    )
}

export default Home;
