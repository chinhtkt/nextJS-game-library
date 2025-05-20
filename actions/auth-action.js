'use server';

import {redirect} from "next/navigation";
import {hashUserPassword, verifyPassword} from "@/lib/hash";
import {createAuthSession, destroySession} from "@/lib/auth";
import {createUser, getUserByEmail} from "@/lib/user";

const testUser = {
    id: 1,
    email: 'chinhtkt2k@gmail.com',
    password: '123456',
}

export async function auth(mode, prevState, formData) {
        return mode === 'login' ? await handleLogin(prevState, formData) : await handleRegister(prevState, formData)
}

export async function handleRegister(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if (!email.includes('@')) {
        errors.email = 'Please enter a valid email address.';
    }

    if (password.trim().length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }
    if (Object.keys(errors).length > 0) {
        return {
            errors
        }
    }

    const hashedPassword = hashUserPassword(password);
    try {
        const id = createUser(email, hashedPassword);
        await createAuthSession(id);
        redirect('/login');
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                errors: {
                    email: 'It seems like an account for the chosen email already exists.'
                }
            };
        }
        throw error;
    }
}

export async function handleLogin(prevState, formData) {

    const email = formData.get('email');
    const password = formData.get('password');

    const existingUser = getUserByEmail(email);
    if(!existingUser) {
        return {
            errors: {
                email: 'Invalid email'
            }
        }
    }
    const isValidPassword = verifyPassword(existingUser?.password, password)
    if(!isValidPassword) {
        return {
            errors: {
                email: 'Invalid password'
            }
        }
    }

    await createAuthSession(existingUser.id);
    redirect('/')

}

export async function handleAuthUser(status) {
    console.log(status, 'status')
    if(!status) {
        return redirect('/login');
    }
    await destroySession();
    return redirect('/');


}
