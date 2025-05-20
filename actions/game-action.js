'use server';

import {createGames} from "@/lib/games";
import {redirect} from "next/navigation";
import {verifyAuth} from "@/lib/auth";

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

    if (errors.length > 0) {
        return {errors};
    }

    const currentUser = await verifyAuth()

    await createGames({
        title: submittedData.title,
        genre: submittedData.genre,
        description: submittedData.description,
        image: submittedData.image,
        releaseDate: submittedData.releaseDate,
        rating: submittedData.rating,
        user_id: currentUser.user.id,
    })
    redirect('/games')






}