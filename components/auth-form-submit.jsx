import React from 'react';
import {useFormStatus} from "react-dom";

const AuthFormSubmitButton = ({mode}) => {
    const {pending} = useFormStatus()
    return (
        <button
            disabled={pending}
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
            {mode === 'login' ? 'Login' : 'Create Account'}
        </button>
    );
};

export default AuthFormSubmitButton;