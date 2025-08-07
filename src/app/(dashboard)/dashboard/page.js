"use client"
import React from "react";
import { useAuth } from "@/contexts/AuthProvider";


function DashboardHome() {
    const { logout } = useAuth()

    function handleClick() {
        logout()
    }

    return (
        <>
            <div className="bg-yellow-300 min-h-screen">
                <div className="flex justify-around py-8">
                    <h1 className="bg-primary-500 text-4xl text-center rounded-md">Welcome to the Home Page!!</h1>
                    <button onClick={handleClick } className="p-5 bg-primary-500 rounded-md">Logout</button>
                </div>
                
            </div>
        </>
    )
}

export default DashboardHome