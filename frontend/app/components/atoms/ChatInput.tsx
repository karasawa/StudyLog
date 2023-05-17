"use client";

import React, { memo } from 'react'

type Props = {
    messageErrFlag: boolean
}

function ChatInput({messageErrFlag}: Props) {

  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="message">メッセージ</label>
        <input id="message" className="rounded-md border-2 p-1 outline-none border-stone-400"/>
        <div className="text-red-400 text-sm">{messageErrFlag ? "メッセージを入力して下さい" : ""}</div>
    </div>
  )
}

export default memo(ChatInput)
