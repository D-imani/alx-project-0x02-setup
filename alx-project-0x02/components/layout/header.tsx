import React from "react";

const Header: React.FC = () => {
    return(
        <header className="bg-white-400 text-white py4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h3 className="font-bold text-2xl">
                    Home
                </h3>
            </div>
        </header>
    );
}
export default Header;