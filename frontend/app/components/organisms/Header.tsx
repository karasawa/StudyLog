"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  
  return (
    <div className="bg-stone-600 flex justify-between items-center text-white" style={{height: "8%"}}>
        <div className="w-full text-center flex justify-center items-center">
            <div className="text-lg cursor-pointer" onClick={() => router.push("/")}>StudyLog</div>
        </div>
    </div>
  )
}