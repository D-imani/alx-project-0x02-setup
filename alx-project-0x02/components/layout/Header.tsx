import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return(
        <header className="bg-white-400 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <h3 className="font-bold text-2xl">Home</h3>
                    <ul className="flex space-x-4">
                        <li className="hover:underline">
                            <Link href="/home">Home</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/posts">Posts</Link>
                        </li>
                    </ul>
            </nav>
        </header>
    );
}
export default Header;
