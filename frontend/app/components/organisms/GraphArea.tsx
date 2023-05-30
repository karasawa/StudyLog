"use client";

import React, { useState, useEffect } from 'react'
import useStore from '../../store/index'
import useCreateStudy from '../../fooks/useCreateStudy';
import useListStudyContents from '../../fooks/useListStudyContents';
import SNSbox from '../molecules/SNSbox';
import ResultInputMemo from '../atoms/ResultInputMemo';
import ResultInputTime from '../atoms/ResultInputTime';
import RegisterButton from '../atoms/RegisterButton';
import ResultInputDate from '../atoms/ResultInputDate';
import ResultInputContent from '../atoms/ResultInputContent';
import useGetRecentReport from '@/fooks/useGetRecentReport';
import Cookie from 'universal-cookie'
import { Buffer } from 'buffer'

const cookie = new Cookie()

export default function GraphArea() {
  const result = useStore((state) => state.result)
  const resetResult = useStore((state) => state.resetResult)
  const setContentsList = useStore((state) => state.setContentsList)
  const setRecentReportList = useStore((state) => state.setRecentReportList)
  const [contentErrFlag, setContentErrFlag] = useState<boolean>(false)
  const [timeErrFlag, setTimeErrFlag] = useState<boolean>(false)
  const [imageData, setImageData] = useState('');
  const [src, setSrc] = useState('')

  useEffect(() => {
    const get_report = async() => {
        await fetch(new URL(`http://localhost:8080/report`), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.png)
          const buf = Buffer.from(data.time_report, "base64")
          const blob = new Blob([buf], { type: "image/png" })
          const uri = window.URL.createObjectURL(blob)
          setImageData(uri)
        })
    }
    get_report()
  }, [])

  return (
    <div style={{height: "100%"}} className="overflow-scroll graph_area">
        <div className="p-6">
            {imageData !== '' && (
                <img src={imageData}/>
            )}        
        </div>
        <div className="p-6">
            {imageData !== '' && (
                <img src={imageData}/>
            )}        
        </div>
    </div>
  )
}
