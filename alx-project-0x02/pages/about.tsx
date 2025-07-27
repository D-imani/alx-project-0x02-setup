import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About : React.FC = () => {
    return (
        <div className="text-center">
            <Header />
            <h1 className="text-2xl">
                About Page
            </h1>
             <Button label="Small + Rounded-sm" size="small" shape="rounded-sm" />
            <Button label="Medium + Rounded-md" size="medium" shape="rounded-md" />
            <Button label="Large + Rounded-full" size="large" shape="rounded-full" />
        </div>
    )
}
export default About;
