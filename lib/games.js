import db from './db'
import fs from 'node:fs';

export async function createGames(game) {
    const extension = game.image.name.split('.').pop()
    const fileName = `${game.title}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await game.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    game.image = `/images/${fileName}`

    db.prepare(`
    INSERT INTO games 
    (title, genre, description, image, releaseDate, rating, user_id) 
    VALUES 
    (@title, @genre, @description, @image, @releaseDate ,@rating ,@user_id).run(game)
    `)
}