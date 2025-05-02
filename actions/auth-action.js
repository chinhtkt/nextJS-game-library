'use server';

import {createSession, deleteSession} from "@/lib/sessions";
import {redirect} from "next/navigation";

const testUser = {
    id: 1,
    email: 'chinhtkt2k@gmail.com',
    password: '123456',
}

export async function handleLogin(prevState, formData) {

    const email = formData.get('email');
    const password = formData.get('password');

    console.log(email, password)

    let errors = {};

    if (!email.includes('@')) {
        errors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors
        }
    }

    if(email !== testUser.email || password !== testUser.password) {
        return {
            errors: {
                email: 'Invalid email or password'
            }
        }
    }

    await createSession(testUser.id);
    redirect('/')

}

export async function handleLogout() {
    await deleteSession();
    redirect("/login")
}