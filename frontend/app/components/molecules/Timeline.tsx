"use client";

import React, { useState, useEffect } from 'react'
import useStore from '../../store/index'
import useCreateStudy from '../../fooks/useCreateStudy';
import useListStudyContents from '../../fooks/useListStudyContents';
import SNSbox from './SNSbox';
import ResultInputMemo from '../atoms/ResultInputMemo';
import ResultInputTime from '../atoms/ResultInputTime';
import RegisterButton from '../atoms/RegisterButton';
import ResultInputDate from '../atoms/ResultInputDate';
import ResultInputContent from '../atoms/ResultInputContent';
import useGetRecentReport from '@/fooks/useGetRecentReport';
import ChatInput from '../atoms/ChatInput';
import TimelineIcons from '../atoms/TimelineIcons';
import TimelineItems from '../atoms/TimelineItems';

export default function ResultInput() {
  const result = useStore((state) => state.result)
  const resetResult = useStore((state) => state.resetResult)
  const setContentsList = useStore((state) => state.setContentsList)
  const setRecentReportList = useStore((state) => state.setRecentReportList)
  const [contentErrFlag, setContentErrFlag] = useState<boolean>(false)
  const [messageErrFlag, setMessageErrFlag] = useState<boolean>(false)

  const clickHandler = async() => {
    // setContentErrFlag(false)
    // setTimeErrFlag(false)
    // if(result.content === ""){setContentErrFlag(true)}
    // if(result.time === ""){setTimeErrFlag(true)}
    // if(contentErrFlag || timeErrFlag){
    //     return
    // }
    // const { createStudy } = useCreateStudy(result.content,
    //                                        result.date,
    //                                        result.time,
    //                                        result.memo)
    // await createStudy()
    // const { getRecentReport } = useGetRecentReport(setRecentReportList)
    // await getRecentReport()
    // resetResult()
  }

  return (
    <div className="flex flex-col overflow-scroll timeline" style={{height: "89%"}}>
        <TimelineItems />
    </div>
  )
}
