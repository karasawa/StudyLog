"use client";

import React, { memo } from 'react'

type Props = {
    report: {
        id: number
        user: string
        content: string
        date: string
        time: string
        memo: string
    }
}

function ModalItem({report}: Props) {
  return (
    <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
        <div className="p-2 flex flex-col">
            <label htmlFor="content">学習コンテンツ</label>
            <select id="content" disabled className="mt-1 p-1 border-2 border-stone-400 rounded">
                <option>{report.content}</option>
            </select>
        </div>
        <div className="p-2 flex flex-col">
            <label htmlFor="time">学習時間</label>
            <select id="time" disabled className="mt-1 p-1 border-2 border-stone-400 rounded">
                <option>{report.time}</option>
            </select>
        </div>
    </div>
)
}

export default memo(ModalItem)