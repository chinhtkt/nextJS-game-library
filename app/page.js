import classes from './page.module.css'
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default async function Home() {
    const featuredGames = [
        { id: 1, title: 'Elden Ring', genre: 'RPG', rating: '9.5/10', image: '/elden-ring.jpg' },
        { id: 2, title: 'Stardew Valley', genre: 'Simulation', rating: '9.0/10', image: '/stardew-valley.jpg' },
        { id: 3, title: 'DOOM Eternal', genre: 'Action', rating: '8.8/10', image: '/doom-eternal.jpg' },
    ];
    return (
        <div className={'h-full w-full'}>
            <div className={'flex flex-col items-center justify-center h-[40%] text-blue-600 dark:text-sky-400'}>
                <div>
                    <h1 className={`text-3xl font-bold ${classes.textShadowNeon}`}>Chào mừng đến Chinhtkt's Game
                        Hub.</h1>
                </div>
                <div className='p-5 text-[#ffff00]'>
                    <h2 className={`text-xl ${classes.textShadowYellowNeon}`}>
                        Tìm kiếm và khám phá hàng ngàn tựa game từ mọi thể loại, từ hành động, phiêu lưu đến chiến
                        thuật. Danh sách game lớn nhất dành cho bạn!
                    </h2>
                </div>
                <div className={classes.ctaButton}>
                    <Link href={'/games'}>Xem Tất Cả Game</Link>
                </div>
            </div>
            <section className="py-10">
                <h2 className={`text-3xl font-bold text-center ${classes.textShadowYellowNeon}`}>
                    Game Hot Nhất Tuần
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
                    {featuredGames.map((game) => (
                        <div key={game.id} className="bg-gray-800 rounded-lg p-4">
                            <Link href={`/games/${game.id}`}>
                                <Image width={300} height={300} src={game.image} alt={game.title} className="w-full h-40 object-cover rounded-md"/>
                            </Link>
                            <h3 className="mt-2 text-xl font-semibold">{game.title}</h3>
                            <p className="text-gray-400">{game.genre}</p>
                            <p className="text-[#ff00ff]">{game.rating}</p>
                            <Link href={`/games/${game.id}`} className="text-[#00ffff] mt-2 inline-block">
                                Xem Chi Tiết
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
