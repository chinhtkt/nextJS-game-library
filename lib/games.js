import fs from 'node:fs';
import sql from "better-sqlite3";


const db = sql('games.db');

export async function createGames(game) {
    const extension = game.image.name.split('.').pop()
    const fileName = `${game.title.toLowerCase().split(' ').join('-')}.${extension}`;
    const stream = fs.createWriteStream(`public/${fileName}`);
    const bufferedImage = await game.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    game.image = `/images/${fileName}`

    db.prepare(`INSERT INTO games
                    (title, genre, description, image, releaseDate, rating, user_id)
                VALUES (@title, @genre, @description, @image, @releaseDate, @rating, @user_id)
    `).run(game)
}

export async function getGames() {
    return db.prepare(`
        SELECT *
        FROM games
    `).all()
}

export async function getGameDetail(id) {
    return db.prepare(`
        SELECT *
        FROM games
        WHERE id = ?
    `).get(id)
}