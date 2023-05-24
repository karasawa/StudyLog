"use client";

import React, { memo } from 'react'
import TimelineIcons from './TimelineIcons'

type Props = {
    timeline: {
        id: number
        user: string
        message: string
        createdAt: Date
    }
}

function TimelineItems({ timeline }: Props) {
  return (
    <div className="flex justify-center border-b-2 border-stone-400" style={{minHeight: "120px"}}>
        <div className="flex flex-col w-3/4 h-full p-2">
            <div className="flex w-full h-2/3">
                <div className="bg-slate-800 rounded-full h-10 w-10"></div>
                <div className="flex flex-col ml-1" style={{width: "89%"}}>
                    <div className="text-xl">{timeline.user}</div>
                    <div className="text-lg">{timeline.message}</div>
                </div>
            </div>
            <TimelineIcons />
        </div>
    </div>
  )
}

export default memo(TimelineItems)