'use server';

import {createGames} from "@/lib/games";
import {redirect} from "next/navigation";

export async function handleAddGame(prevState, formData) {

    let errors = [];

    const formFields = ['title', 'genre', 'description', 'image', 'releaseDate', 'rating']

    const submittedData = {}

    for (const [key, value] of formData.entries()) {
        if (!formFields.includes(key)) {
            continue;
        }
        !value ? errors.push(`Truờng ${key} là bắt buộc `) : submittedData[key] = value
        key === 'image' && value.size === 0 ? errors.push(`Yêu cầu chọn ảnh`) : submittedData[key] = value
    }

    console.log(submittedData, 'submittedData')

    if (errors.length > 0) {
        return {errors};
    }

    await createGames({
        title: submittedData.title,
        genre: submittedData.genre,
        description: submittedData.description,
        image: submittedData.image,
        releaseDate: submittedData.releaseDate,
        rating: submittedData.rating,
        user_id: 1,
    })
    redirect('/home')






}