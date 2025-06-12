"use client"
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSignup = async () => {
        if (!username || !password) {
            setError("Please fill in both username and password");
            return;
        }

        setLoading(true);
        setError("");
        
        try {
            const response = await axios.post("/api/user/", {
                username,
                password
            });
            console.log("Success:", response.data);
           const params = new URLSearchParams({
            username: response.data.user.username,
            password: response.data.user.password
           });
         router.push(`/results?${params.toString()}`);

            
        } catch (error) {
            console.error("Error:", error);
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.error || "Something went wrong");
            } else {
                setError("Network error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput 
                            onChange={(e) => setUsername(e.target.value)} 
                            label="Username" 
                            placeholder="harkirat@gmail.com" 
                            value={username}
                        />
                        <LabelledInput 
                            onChange={(e) => setPassword(e.target.value)} 
                            label="Password" 
                            type="password" 
                            placeholder="123456" 
                            value={password}
                        />
                        {error && (
                            <div className="text-red-500 text-sm mt-2">{error}</div>
                        )}
                        <button  
                            onClick={handleSignup}
                            disabled={loading}
                            type="button" 
                            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:opacity-50"
                        >
                            {loading ? "Signing up..." : "Sign up"}
                        </button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}

function LabelledInput({ label, placeholder, type, onChange, value }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input 
            onChange={onChange} 
            value={value}
            type={type || "text"} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder={placeholder} 
            required 
        />
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}