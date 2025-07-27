import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;