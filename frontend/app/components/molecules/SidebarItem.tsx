"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import Cookie from 'universal-cookie'

type Props = {
    prop: {
        path: string;
        text: string;
        icon: any;
    };
}

const cookie = new Cookie()

export default function SidebarItem({prop}: Props) {
  const router = useRouter()

  return (
    <div onClick={() => {
            if(prop.path === "/auth"){
                cookie.remove("access_token")
                cookie.remove("refresh_token")
            }
            router.push(prop.path)
        }} 
        className="flex justify-start items-cente py-1 px-2 cursor-pointer text-white text-lg hover:border-b">
        {prop.icon}
        <h5>{prop.text}</h5>
    </div>
)
}

