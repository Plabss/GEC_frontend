// components/RegisterPage.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from 'react-toastify';

export default function RegisterPage() {
    const [name, setName] = useState("");
    
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            phone,
            email,
            password
        };

        try {
            const response = await fetch(`http://localhost:8080/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Signup successful!');
                router.push('/login');
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Signup failed!');
            }
        } catch (error) {
            toast.error('An error occurred while processing your request.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md my-8 p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">Create your GEC account</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="Full name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-3/4 ml-2"
                            placeholder="Phone number"
                        />
                    </div>
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
                        <label className="block text-gray-700">Create a password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            I agree to GEC Terms and privacy policy
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Please contact me by phone, email or SMS to assist with my enquiry
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            I agree to receive occasional communications from GEC about courses, offers and other marketing information
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded w-full"
                    >
                        Create an account
                    </button>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
