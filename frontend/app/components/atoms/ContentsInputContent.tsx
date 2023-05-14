"use client";

import React, { memo } from 'react'
import useStore from '../../store/index'

type Props = {
    contentErrFlag: boolean
}

function ContentsInputContent({contentErrFlag}: Props) {
  const content = useStore((state) => state.content)
  const setContent = useStore((state) => state.setContent)
  
  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="content">学習コンテンツ</label>
        <input id="content" className="rounded-md border-2 p-2 outline-none border-stone-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}/>
        <div className="text-red-400 text-sm">{contentErrFlag ? "学習コンテンツを入力して下さい" : ""}</div>
    </div>
  )
}

export default memo(ContentsInputContent)