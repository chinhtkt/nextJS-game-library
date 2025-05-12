'use client'

import React, {useActionState} from 'react';
import styles from './page.module.css';
import {handleAddGame} from "@/actions/game-action";
import ImagePicker from "@/components/games/image-picker";
const AddGamePage = () => {
    const [formState, formAction] = useActionState(handleAddGame, {});
    return (
        <div className={styles.container}>
            <h1 className="text-3xl font-bold text-center mb-6 text-[#ffff00] text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00;">
                Thêm Game Mới
            </h1>
            <div className={styles.formContainer}>
                <form action={formAction}>
                    <div>
                        <label htmlFor="title" className={styles.label}>
                            Tên Game
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className={styles.inputField}
                            placeholder="Nhập tên game"
                        />
                    </div>
                    <div>
                        <label htmlFor="genre" className={styles.label}>
                            Thể Loại
                        </label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            className={styles.inputField}
                            placeholder="Nhập thể loại (ví dụ: RPG, Action)"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className={styles.label}>
                            Mô Tả
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className={styles.inputField}
                            placeholder="Nhập mô tả game"
                            rows="4"
                        />
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className={styles.label}>
                            URL Hình Ảnh
                        </label>
                        <ImagePicker name='image'/>
                    </div>
                    <div>
                        <label htmlFor="releaseDate" className={styles.label}>
                            Ngày Phát Hành
                        </label>
                        <input
                            type="date"
                            id="releaseDate"
                            name="releaseDate"
                            className={styles.inputField}
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className={styles.label}>
                            Điểm Đánh Giá
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            className={styles.inputField}
                            placeholder="Nhập điểm (0-10)"
                            min="0"
                            max="10"
                            step="0.1"
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Thêm Game
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddGamePage;