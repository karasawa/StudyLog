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

export default function ResultInput() {
  const result = useStore((state) => state.result)
  const resetResult = useStore((state) => state.resetResult)
  const setContentsList = useStore((state) => state.setContentsList)
  const [contentErrFlag, setContentErrFlag] = useState<boolean>(false)
  const [timeErrFlag, setTimeErrFlag] = useState<boolean>(false)

  useEffect(() => {
    const list_study_contents = async() => {
        const { listStudyContents } = useListStudyContents(setContentsList)
        await listStudyContents()
    }
    list_study_contents()
  }, [])

  const clickHandler = async() => {
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
                <ResultInputContent contentErrFlag={contentErrFlag} />
                <ResultInputDate />
                <ResultInputTime timeErrFlag={timeErrFlag} />
                <ResultInputMemo />
                <div className="p-2 my-2">
                    <RegisterButton clickHandler={clickHandler} text="記録する" />
                </div>
            </div>
            <SNSbox />
        </div>
    </div>
  )
}
