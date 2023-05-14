"use client";

import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import FlagIcon from '@mui/icons-material/Flag';
import TimelineIcon from '@mui/icons-material/Timeline';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SidebarItem from '../atoms/SidebarItem';
import CreateIcon from '@mui/icons-material/Create';

export default function Sidebar() {
  const props = [
    {path: "/", text: "記録", icon: <CreateIcon  className="mr-3"/>},
    {path: "/", text: "学習レポート", icon: <AppRegistrationIcon  className="mr-3"/>},
    {path: "/objective", text: "目標設定", icon: <FlagIcon  className="mr-3"/>},
    {path: "/contents", text: "コンテンツ登録", icon: <CategoryIcon  className="mr-3"/>},
    {path: "/", text: "タイムライン", icon: <TimelineIcon  className="mr-3"/>},
    {path: "/", text: "プロフィール", icon: <Person2Icon  className="mr-3"/>},
    {path: "/auth", text: "ログアウト", icon: <LogoutIcon  className="mr-3"/>},
  ]

  return (
    <>
        {props.map((prop, index) => (<SidebarItem key={index} prop={prop} />))}
    </>
  )
}
