"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";
export default function ResultsContent(){
    const searchParams = useSearchParams();
    const username = searchParams.get("username");
    const password = searchParams.get("password");

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Results</h1>
            <div className="bg-white p-4 rounded shadow">
                <p>
                    <strong>Username:</strong> {username}
                </p>
                <p>
                    <strong>Password:</strong> {password}
                </p>
            </div>
        </div>
    );




return (
    <Suspense fallback={<div>Loading...</div>}>
        <ResultsContent />
    </Suspense>
)}