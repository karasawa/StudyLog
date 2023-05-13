"use client";

import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import useStore from '../../store/index'
import useCreateStudy from '../../fooks/useCreateStudy';
import useListStudyContents from '../../fooks/useListStudyContents';

export default function ResultInput() {
  const result = useStore((state) => state.result)
  const setResult = useStore((state) => state.setResult)
  const resetResult = useStore((state) => state.resetResult)
  const contentsList = useStore((state) => state.contentsList)
  const setContentsList = useStore((state) => state.setContentsList)
  const [contentErrFlag, setContentErrFlag] = useState<boolean>(false)
  const [timeErrFlag, setTimeErrFlag] = useState<boolean>(false)

  const today = format(new Date(), 'yyyy-MM-dd')

  const timeList = ["","1.0","1.5","2.0","2.5","3.0","3.5","4.0",
                    "4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0"]

  useEffect(() => {
    const list_study_contents = async() => {
        const { listStudyContents } = useListStudyContents(setContentsList)
        await listStudyContents()
    }
    list_study_contents()
  }, [])

  const clickHander = async() => {
    setContentErrFlag(false)
    setTimeErrFlag(false)
    if(result.content === ""){setContentErrFlag(true)}
    if(result.time === ""){setTimeErrFlag(true)}
    if(contentErrFlag || timeErrFlag){
        return
    }
    const { createStudy } = useCreateStudy(result.content,
                                           result.date,
                                           result.time,
                                           result.memo)
    await createStudy()
    resetResult()
  }

  return (
    <div>
        <div className="p-8 flex flex-col justify-center justify-items-center">
            <div className="text-center p-3 stroke-inherit text-xl text-stone-600">学習成果を記録する</div>
            <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
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
                <div className="p-2 flex flex-col">
                    <label htmlFor="date">学習日</label>
                    <select disabled id="date" className="mt-1 p-1 border-2 rounded disabled bg-gray-200 border-stone-400">
                        <option>{today}</option>
                    </select>
                </div>
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
                <div className="p-2 flex flex-col">
                    <label htmlFor="memo">メモ</label>
                    <textarea id="memo" className="rounded-md border-2 p-2 outline-none border-stone-400"
                            value={result.memo}
                            onChange={(e) => setResult({ ...result, memo: e.target.value})}/>
                </div>
                <div className="p-2 my-2">
                    <button className="rounded-md bg-stone-600 text-white w-full p-2 hover:bg-stone-800"
                            onClick={clickHander}>記録する</button>
                </div>
            </div>
            <div className=" text-white p-3 flex justify-end items-center">
                <InstagramIcon className="text-5xl text-stone-600 mr-2 cursor-pointer hover:text-stone-800"/>
                <TwitterIcon className="text-5xl text-stone-600 mr-2 cursor-pointer hover:text-stone-800"/>
                <FacebookIcon className="text-5xl text-stone-600 cursor-pointer hover:text-stone-800"/>
            </div>
        </div>
    </div>
  )
}
