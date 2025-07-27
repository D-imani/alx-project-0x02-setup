import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
