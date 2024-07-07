/* eslint-disable react/no-unescaped-entities */
// components/LoginPage.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/client"; // Assuming you are using next-auth
import Link from "next/link";
import { toast } from 'react-toastify';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = {
            "email": email,
            "password": password
        }

        try {
            const response = await fetch(`http://localhost:8080/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.data;
                console.log("Token:", token);

                // Store the token in localStorage or cookie
                localStorage.setItem('token', token.token);
                localStorage.setItem('_id', token.id);
                router.push('/find-a-course/course')
                toast("Successfully Login!")
                window.dispatchEvent(new Event("storage"));

                // Redirect to another page or perform other actions
            } else {
                const errorData = await response.json();
                toast(errorData.message);
            }
        } catch (error) {
            toast('An error occurred while processing your request.');
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4 text-right">
                        <Link href="#" className="text-blue-500">Forgot password?</Link>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded w-full"
                    >
                        Sign in
                    </button>
                </form>

                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-500">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
