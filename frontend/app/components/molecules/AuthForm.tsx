"use client";

import React, { useState } from 'react'
import useAuth from '../../fooks/useAuth'
import Cookie from 'universal-cookie'
import { useRouter } from 'next/navigation';
import useGetObjective from '@/fooks/useGetObjective';
import useGetProfile from '@/fooks/useGetProfile';
import useStore from '../../store/index'

const cookie = new Cookie()

export default function AuthForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [errFlag, setErrFlag] = useState<boolean>(false)
  const setObjective = useStore((state) => state.setObjective)
  const setProfile = useStore((state) => state.setProfile)

  const router = useRouter()

  const clickHandler = async() => {
    const { signup, login } = useAuth(email, password)
    setErrFlag(false)
    if(isLogin){
      await login()
      if(cookie.get("access_token") === "undefined"){
        setErrFlag(true)
        return
      }
      const { getObjective } = useGetObjective(setObjective)
      const { getProfile } = useGetProfile(setProfile)
      await getObjective()
      await getProfile()
      router.push("/")
    } else {
      await signup()
      setIsLogin(true)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center font-bold text-stone-600 bg-stone-600">
      <div className="h-1/2 flex flex-col justify-evenly items-center p-5 rounded-md border-stone-400">
        <div className="text-xl text-white">StudyLog</div>
        <input type="text" id="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)}
               className="outline-none p-2 rounded-md border-stone-400 border-2"
        />
        <input type="password" id="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)}
               className="outline-none p-2 rounded-md border-stone-400 border-2"
        />
        <div className="text-red-400 text-sm">{errFlag ? "認証に失敗しました" : ""}</div>
        <button onClick={() => clickHandler()}
               className=" text-white w-full p-2 rounded-md bg-stone-800 " 
        >{isLogin ? "ログイン" : "新規登録"}</button>
        <div className="flex justify-evenly items-center w-full">
          <div className="w-1/4 bg-white" style={{height: "0.2px"}}></div>
          <div className="text-white text-sm">または</div>
          <div className="w-1/4 bg-white" style={{height: "0.2px"}}></div>
        </div>
        <div className="text-stone-800 cursor-pointer border-stone-800 hover:border-b-2" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "アカウントを新規登録する" : "ログインへ戻る"}</div>
      </div>
    </div>
  )
}
