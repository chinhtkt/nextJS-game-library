import React from 'react';
import {getGameDetail} from "@/lib/games";
import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image";

const GameDetailPage = async ({params}) => {
    const {id} = await params
    const fetchGameDetail = await getGameDetail(id)

    if (!fetchGameDetail) {
        return <div className={styles.container}>Game không tồn tại</div>;
    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Chi Tiết Game</h1>
            </header>
            <div className={styles.gameDetail}>
                <Image src={fetchGameDetail.image} alt={fetchGameDetail.title} className={styles.gameImage} width={300}
                       height={300}/>
                <div className={styles.gameInfo}>
                    <h2>{fetchGameDetail.title}</h2>
                    <p>
                        <span className={styles.label}>Thể loại:</span> {fetchGameDetail.genre}
                    </p>
                    <p>
                        <span className={styles.label}>Mô tả:</span> {fetchGameDetail.description}
                    </p>
                    <p>
                        <span className={styles.label}>Ngày phát hành:</span> {fetchGameDetail.releaseDate}
                    </p>
                    <p>
                        <span className={styles.label}>Điểm đánh giá:</span> {fetchGameDetail.rating}
                    </p>
                </div>
            </div>
            <Link className={styles.buttonContainer} href="/games">
                <button className={styles.backButton}>Quay lại Danh Sách</button>
            </Link>
        </div>
    );
};

export default GameDetailPage;