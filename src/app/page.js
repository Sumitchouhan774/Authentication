"use client"
import React, {useState, useEffect} from "react"
import { supabase } from "@/lib/superBaseClient";
import { useRouter } from "next/navigation";
export default function Home() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const checkUser = async () => {
          const {
            data: { session },
          } = await supabase.auth.getSession()
    
          if (!session?.user) {
            router.push('/login') // redirect if not logged in
          } else {
            setUser(session.user)
          }
        }
    
        checkUser()
      }, [])

      if(!user){ return <p>Loading....</p>} 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24 bg-gradient-to-b from-gray-400 to-black text-white">
                <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-transparent rounded-4xl shadow-lg gap-2">
                <h2 className="text-3xl font-bold mb-10">Welcome to the Home Page</h2>
                <p className="text-lg">This is the main content area.</p>
            </div>
        </div>)
}       