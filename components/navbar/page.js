import Link from "next/link";
import {handleAuthUser} from "@/actions/auth-action";
import {verifyAuth} from "@/lib/auth";
import classes from './page.module.css'

const NavBar = async () => {
    const isLoggedIn = await verifyAuth()
    return (<header className="bg-gray-900 text-white p-4 shadow-lg border-b border-purple-500">
            <div className="container mx-auto flex justify-between items-center">
                <nav className="flex gap-8">
                    <Link className="hover:text-purple-400 transition" href="/">
                        <h1>Home</h1>
                    </Link>
                    <Link className="hover:text-purple-400 transition" href="/games">
                        <h1>Games</h1>
                    </Link>
                    {isLoggedIn.user?.username && <Link className="hover:text-purple-400 transition" href="/add-game">
                        <h1>Add Game</h1>
                    </Link>}
                </nav>

                <div className={'flex gap-8 items-center'}>
                    <p className={`text-blue-600 dark:text-sky-400 ${classes.textShadowNeon}`}>
                        {isLoggedIn.user?.username && 'Welcome' + ' ' + isLoggedIn?.user?.username}
                    </p>
                    <form action={handleAuthUser.bind(null, isLoggedIn.user)}>
                        <button
                            type="submit"
                            className='bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold cursor-pointer'
                        >
                            {isLoggedIn.user ? 'Logout' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </header>);
};

export default NavBar;