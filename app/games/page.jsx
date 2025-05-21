import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Image from "next/image";
import {getGames} from "@/lib/games";

const GamesListPage = async () => {
    const games = await getGames()
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>List</h1>
            </header>
            <div className={styles.gameGrid}>
                {games.map((game) => (
                    <div key={game.id} className={styles.gameCard}>
                        <Image
                            width={200}
                            height={200}
                            src={game.image}
                            alt={game.title}
                            className={styles.gameImage}
                        />
                        <h2 className={styles.gameTitle}>{game.title}</h2>
                        <p className={styles.gameGenre}>Thể loại: {game.genre}</p>
                        <Link href={`/games/${game.id}`}>
                            <button className={styles.viewButton}>Xem Chi Tiết</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesListPage;