"use client";

import React, { useState } from 'react'
import useAuth from '../../fooks/useAuth'
import Cookie from 'universal-cookie'
import { useRouter } from 'next/navigation';

const cookie = new Cookie()

export default function AuthForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [errFlag, setErrFlag] = useState<boolean>(false)

  const router = useRouter()

  const clickHandler = async() => {
    const { signup, login } = useAuth(email, password)
    setErrFlag(false)
    if(isLogin){
      await login()
      console.log(cookie.get("access_token"))
      if(cookie.get("access_token") === "undefined"){
        setErrFlag(true)
        return
      }
      router.push("/")
    } else {
      await signup()
      setIsLogin(true)
    }
  }

  return (
    <div>
      <label htmlFor="email">メールアドレス</label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="password">パスワード</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => clickHandler()}>{isLogin ? "ログイン" : "新規登録"}</button>
      <h5 onClick={() => setIsLogin(!isLogin)}>{isLogin ? "アカウントを作成する" : "ログインへ戻る"}</h5>
      <h5>{errFlag ? "認証が失敗しました" : ""}</h5>
    </div>
  )
}
