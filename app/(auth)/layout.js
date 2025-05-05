import React from 'react';
import {handleLogout} from "@/actions/auth-action";
import Link from "next/link";
import classes from '../layout.module.css'
export const metadata = {
    title: 'Homepage',
    description: 'Welcome to Homepage',
};


const AuthLayout = ({children}) => {
    return (
        <>
            <header className="bg-gray-900 text-white p-4 shadow-lg border-b border-purple-500">
                <div className="container flex justify-around items-center">
                    <div className={'flex justify-between gap-10'}>
                        <Link className={classes.menuItem} href={'/home'}>
                            <h1>Trang Chính</h1>
                        </Link>
                        <Link className={classes.menuItem} href={'/games'}>
                            <h1>Games</h1>
                        </Link>
                        <Link className={classes.menuItem} href={'/add-game'}>
                            <h1>Thêm game</h1>
                        </Link>
                    </div>
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
            <div className='size-full bg-[url(/cyberpunk.jpg)] bg-cover relative overflow-hidden'>
                <div className='absolute w-full h-full bg-[rgba(0,0,0,0.8)]'>
                        {children}
                </div>
            </div>
        </>
    );
};

export default AuthLayout;