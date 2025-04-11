"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/superBaseClient";
import { useRouter } from "next/navigation";
   

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSighnIN = () => {
    const signIn = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        console.error("Error signing up:", error.message);
      } else {
        console.log("User signed up successfully:", data);
        router.push("/");
      }
    };
    signIn();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 bg-gradient-to-b from-gray-400 to-black text-white">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-transparent rounded-4xl shadow-lg gap-2">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <p className="mb-4">Create an account? <a href="/register" className="text-black underline">Regsiter</a></p>
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 gap-4">
          <input className="w-full p-3 mb-4 border border-gray-600 bg-[#252525] rounded-2xl shadow-md border-none outline-none" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full p-3 mb-4 border border-gray-600 bg-[#252525] rounded-2xl shadow-md border-none outline-none" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" onClick={handleSighnIN} className="p-3 mb-4 border-b-6  border-black bg-[#252525] rounded-2xl shadow-md">LOGIN</button>
      </div>
    </div>
  );
}
