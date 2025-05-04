import React from 'react';
import {handleLogout} from "@/actions/auth-action";

export const metadata = {
    title: 'Homepage',
    description: 'Welcome to Homepage',
};


const AuthLayout = () => {
    return (
        <>
            <header className="bg-gray-900 text-white p-4 shadow-lg border-b border-purple-500">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-yellow-300 tracking-wider">Welcome back gamer!</h1>
                    <form action={handleLogout}>
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black cursor-pointer px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </header>
        </>
    );
};

export default AuthLayout;