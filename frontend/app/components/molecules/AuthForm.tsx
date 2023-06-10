"use client";

import React, { useState } from 'react'
import useAuth from '../../fooks/useAuth'
import Cookie from 'universal-cookie'
import { useRouter } from 'next/navigation';
import useGetObjective from '@/fooks/useGetObjective';
import useGetProfile from '@/fooks/useGetProfile';
import useStore from '../../store/index'
import useAuthValidation from '@/fooks/useAuthValidation';

export type ValidFlag = {
  email_fmt_err: boolean
  email_len_err: boolean
  pass_len_err: boolean
  pass_min_len_err: boolean
}

const cookie = new Cookie()

export default function AuthForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [errFlag, setErrFlag] = useState<boolean>(false)
  const [emailFmtErr, setEmailFmtErr] = useState(false)
  const [emailLenErr, setEmailLenErr] = useState(false)
  const [passLenErr, setPassLenErr] = useState(false)
  const [passMinLenErr, setPassMinLenErr] = useState(false)
  const setObjective = useStore((state) => state.setObjective)
  const setProfile = useStore((state) => state.setProfile)

  const router = useRouter()

  const clickHandler = async() => {
    const { signup, login } = useAuth(email, password)
    const { authValidation } = useAuthValidation(email, password)
    setErrFlag(false)
    setEmailFmtErr(false)
    setEmailLenErr(false)
    setPassLenErr(false)
    setPassMinLenErr(false)
    
    const { email_fmt_err, email_len_err, pass_len_err, pass_min_len_err } = authValidation()
    if(email_fmt_err){ setEmailFmtErr(true) }
    if(email_len_err){ setEmailLenErr(true) }
    if(pass_len_err){ setPassLenErr(true) }
    if(pass_min_len_err){ setPassMinLenErr(true) }
    if(email_fmt_err || email_len_err || pass_len_err || pass_min_len_err)return

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
        <div className="text-red-400 text-sm">{emailLenErr ? "メールアドレスを入力してください" : ""}</div>
        <div className="text-red-400 text-sm">{emailFmtErr && !emailLenErr ? "メールアドレスの形式が正しくありません" : ""}</div>
        <div></div>
        <input type="password" id="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)}
               className="outline-none p-2 rounded-md border-stone-400 border-2"
        />
        <div className="text-red-400 text-sm">{passLenErr ? "パスワードを入力してください" : ""}</div>
        <div className="text-red-400 text-sm">{passMinLenErr && !passLenErr ? "パスワードは6文字以上で入力してください" : ""}</div>
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
