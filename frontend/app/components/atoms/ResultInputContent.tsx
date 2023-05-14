"use client";

import React, { memo } from 'react'
import useStore from '../../store/index'

type Props = {
    contentErrFlag: boolean
}

function ResultInputContent({contentErrFlag}: Props) {
  const result = useStore((state) => state.result)
  const setResult = useStore((state) => state.setResult)
  const contentsList = useStore((state) => state.contentsList)
  
  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="content">学習コンテンツ</label>
        <select id="content" className="mt-1 p-1 border-2 rounded outline-none border-stone-400"
                value={result.content}
                onChange={(e) => setResult({ ...result, content: e.target.value})}>
            <option></option>
            {contentsList.length > 0 && contentsList.map((content) => (
                <option key={content.id}>{content.content}</option>
            ))}
        </select>
        <div className="text-red-400 text-sm">{contentErrFlag ? "学習コンテンツを設定して下さい" : ""}</div>
    </div>
  )
}

export default memo(ResultInputContent)