import React from 'react'

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Page Not Found</p>
            <a href="/" className="text-blue-500 hover:underline">
                Go Back to Home
            </a>
        </div>
    );
};

export default NotFoundPage;
