"use client";

import React, { memo } from 'react'
import useStore from '../../store/index'

type Props = {
    usernameErrFlag: boolean
}

function ProfileInputUsername({usernameErrFlag}: Props) {
  const profile = useStore((state) => state.profile)
  const setProfile = useStore((state) => state.setProfile)
    
  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="username">ニックネーム</label>
        <input id="username" className="rounded-md border-2 p-2 outline-none border-stone-400"
            value={profile.username}
            onChange={(e) => setProfile({...profile, username: e.target.value})}/>
        <div className="text-red-400 text-sm">{usernameErrFlag ? "ニックネームを入力して下さい" : ""}</div>
    </div>
  )
}

export default memo(ProfileInputUsername)