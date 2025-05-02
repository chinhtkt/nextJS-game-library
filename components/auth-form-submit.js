'use client'
import React from 'react';
import {useFormStatus} from "react-dom";

const AuthFormSubmitButton = () => {
    const {pending} = useFormStatus()
    return (
            <button
                disabled={pending}
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
            >
                Login
            </button>
    );
};

export default AuthFormSubmitButton;