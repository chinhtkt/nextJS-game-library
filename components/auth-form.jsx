'use client'
import React, {useActionState} from 'react';
import AuthFormSubmitButton from "@/components/auth-form-submit";
import Link from "next/link";
import {auth} from "@/actions/auth-action";


const AuthForm = ({mode = 'login'}) => {
    const [formState, formAction] = useActionState(auth.bind(null,mode), {});
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url(/cyberpunk.jpg)] bg-cover">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{mode === 'login' ? 'Login' : 'Create your account'}</h2>
                <form action={formAction}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-black">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    {formState?.errors && (
                        <ul>
                            {Object.keys(formState?.errors).map((error) => (
                                <li key={error} className="text-red-500 text-sm mb-4">{formState?.errors[error]}</li>
                            ))}
                        </ul>
                    )}
                    <AuthFormSubmitButton mode={mode}/>
                </form>
                <p className={'text-black text-center pt-1'}>
                    {mode === 'login' && <Link href="/register">Create an account.</Link>}
                    {mode === 'register' && <Link href="/login">Login with existing account.</Link>}
                </p>
            </div>
        </div>
    );
};

export default AuthForm;

