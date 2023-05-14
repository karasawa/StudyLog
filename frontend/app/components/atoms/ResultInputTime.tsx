"use client";

import React, { memo } from 'react'
import useStore from '../../store/index'

type Props = {
    timeErrFlag: boolean
}

function ResultInputTime({timeErrFlag}: Props) {
  const result = useStore((state) => state.result)
  const setResult = useStore((state) => state.setResult)
  const timeList = ["","1.0","1.5","2.0","2.5","3.0","3.5","4.0",
                    "4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0"]

  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="time">学習時間</label>
        <select id="time" className="mt-1 p-1 border-2 rounded outline-none border-stone-400"
                value={result.time}
                onChange={(e) => setResult({ ...result, time: e.target.value})}>
            {timeList.map((time, index) => (
                <option key={index}>{time}</option>
            ))}
        </select>
        <div className="text-red-400 text-sm">{timeErrFlag ? "学習時間を設定して下さい" : ""}</div>
    </div>
  )
}

export default memo(ResultInputTime)
