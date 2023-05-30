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
  const [timeReport, setTimeReport] = useState('');
  const [contentsReport, setContentsReport] = useState('');
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
          const buf_a = Buffer.from(data.time_report, "base64")
          const blob_a = new Blob([buf_a], { type: "image/png" })
          const uri_a = window.URL.createObjectURL(blob_a)
          setTimeReport(uri_a)

          const buf_b = Buffer.from(data.contents_report, "base64")
          const blob_b = new Blob([buf_b], { type: "image/png" })
          const uri_b = window.URL.createObjectURL(blob_b)
          setContentsReport(uri_b)
        })
    }
    get_report()
  }, [])

  return (
    <div style={{height: "100%"}} className="overflow-scroll graph_area">
        <div className="p-6">
            {timeReport !== '' && (
                <img src={timeReport}/>
            )}        
        </div>
        <div className="p-6">
            {contentsReport !== '' && (
                <img src={contentsReport}/>
            )}        
        </div>
    </div>
  )
}
