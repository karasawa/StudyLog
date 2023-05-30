"use client";

import React, { useState, useEffect } from 'react'
import useStore from '../../store/index'
import useGetProfile from '../../fooks/useGetProfile';
import useUpdateProfile from '../../fooks/useUpdateProfile';
import RegisterButton from '../atoms/RegisterButton';
import ProfileInputUsername from '../atoms/ProfileInputUsername';

export default function ProfileInput() {
  const profile = useStore((state) => state.profile)
  const setProfile = useStore((state) => state.setProfile)
  const [usernameErrFlag, setUsernameErrFlag] = useState<boolean>(false)
  const snackBarStatus = useStore((state) => state.snackBarStatus)
  const setSnackBarStatus = useStore((state) => state.setSnackBarStatus)

  useEffect(() => {
    const get_profile = async() => {
        const { getProfile } = useGetProfile(setProfile)
        await getProfile()
    }
    get_profile()
  }, [])

  const clickHandler = async() => {
    setUsernameErrFlag(false)
    if(profile.username === ""){setUsernameErrFlag(true)}
    if(usernameErrFlag){
        return
    }
    const { updateProfile } = useUpdateProfile(profile.username)
    await updateProfile()
    setSnackBarStatus({...snackBarStatus, open: true})
  }

  return (
    <div>
        <div className="p-8 flex flex-col justify-center justify-items-center">
            <div className="text-center p-3 stroke-inherit text-xl text-stone-600">プロフィールを設定する</div>
            <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
                <ProfileInputUsername usernameErrFlag={usernameErrFlag}/>
                <div className="p-2 my-2">
                    <RegisterButton clickHandler={clickHandler} text="設定する" />
                </div>
            </div>
        </div>
    </div>
  )
}
