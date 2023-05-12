"use client";

import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import FlagIcon from '@mui/icons-material/Flag';
import TimelineIcon from '@mui/icons-material/Timeline';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter()

  return (
    <>
        <div onClick={() => router.push('/')} className="flex justify-start items-cente py-1 px-2 cursor-pointer text-white text-lg hover:border-b">
            <AppRegistrationIcon className="mr-3"/>
            <h5>学習レポート</h5>
        </div>
        <div onClick={() => router.push('/')} className="flex justify-start items-cente py-1 px-2 cursor-pointer text-white text-lg hover:border-b">
            <FlagIcon className="mr-3"/>
            <h5>目標設定</h5>
        </div>
        <div onClick={() => router.push('/')} className="flex justify-start items-cente py-1 px-2 cursor-pointer text-white text-lg hover:border-b">
            <CategoryIcon className="mr-3"/>
            <h5>コンテンツ登録</h5>
        </div>
        <div onClick={() => router.push('/')} className="flex justify-start items-cente py-1 px-2 cursor-pointer text-white text-lg hover:border-b">
            <TimelineIcon className="mr-3"/>
            <h5>タイムライン</h5>
        </div>
        <div onClick={() => router.push('/')} className="flex justify-start items-cente py-1 px-2 cursor-pointer text-white text-lg hover:border-b">
            <Person2Icon className="mr-3"/>
            <h5>プロフィール</h5>
        </div>
        <div onClick={() => router.push('/')} className="flex justify-start items-cente py-1 px-2 cursor-pointer text-white text-lg hover:border-b">
            <LogoutIcon className="mr-3"/>
            <h5>ログアウト</h5>
        </div>
    </>
  )
}
