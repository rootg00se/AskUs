import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
    return (
        <div className="flex w-screen h-screen items-center justify-center flex-col">
            <h1 className="text-9xl font-bold mb-5">404</h1>
            <p className="mb-3 text-2xl max-w-150 italic max-sm:text-xl">Oooops... There is nothing there!</p>
            <p className="max-w-100 text-center mb-5">Maybe the page you were looking for is not found or never existed</p>
            <Link to="/" className="cursor-pointer text-lg text-primary hover:underline">
                Return to home page
            </Link>
        </div>
    );
};
