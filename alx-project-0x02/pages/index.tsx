import React from "react";
import Header from "@/components/layout/header";

const Welcome : React.FC = () => {
  return(
    <div className="text-center">
      <Header />
      <div className="text-5xl font-bold text-white">
        Welcome to The AirBnB Clone!
      </div>
    </div>

  )
}

export default Welcome;