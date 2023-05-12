"use client";

import React from 'react'

export default function Header() {
  return (
    <div className="bg-stone-600 flex justify-between items-center text-white" style={{height: "8%"}}>
        <div className="w-full text-center flex justify-center items-center">
            <div className="text-lg cursor-pointer">StudyLog</div>
        </div>
    </div>
  )
}