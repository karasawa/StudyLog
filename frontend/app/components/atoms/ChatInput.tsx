"use client";

import React, { memo, useState } from 'react'
import RegisterButton from './RegisterButton';
import useStore from '../../store/index'
import useCreateTimeline from '@/fooks/useCreateTimeline';

function ChatInput() {
  const timeline = useStore((state) => state.timeline)
  const setTimeline = useStore((state) => state.setTimeline)
  const [messageErrFlag, setMessageErrFlag] = useState<boolean>(false)

  const clickHandler = async() => {
    setMessageErrFlag(false)
    if(timeline.message === ""){setMessageErrFlag(true)}
    if(messageErrFlag){
        return
    }
    const { createTimeline } = useCreateTimeline(timeline.message)
    await createTimeline()
    setTimeline({...timeline, message: ""})
    }

  return (
    <div className="flex justify-center items-center h-full">
        {timeline.message}
        <input className="w-1/2 rounded-md border-2 p-1 outline-none border-stone-400"
               onChange={(e) => setTimeline({...timeline, message: e.target.value})} 
               value={timeline.message}/>
        <div className="ml-2" style={{width: "10%"}}>
            <RegisterButton clickHandler={clickHandler} text="投稿"/>
        </div>
    </div>
  )
}

export default memo(ChatInput)
