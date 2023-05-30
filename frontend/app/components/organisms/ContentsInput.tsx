"use client";

import React, {useState} from 'react'
import useStore from '../../store/index'
import useCreateStudyContents from '../../fooks/useCreatrStudyContents';
import RegisterButton from '../atoms/RegisterButton';
import ContentsInputContent from '../atoms/ContentsInputContent';

export default function ResultInput() {
  const content = useStore((state) => state.content)
  const setContent = useStore((state) => state.setContent)
  const [contentErrFlag, setContentErrFlag] = useState<boolean>(false)
  const snackBarStatus = useStore((state) => state.snackBarStatus)
  const setSnackBarStatus = useStore((state) => state.setSnackBarStatus)

  const clickHandler = async() => {
    setContentErrFlag(false)
    if(content === ""){setContentErrFlag(true)}
    if(contentErrFlag){
        return
    }
    const { createStudyContents } = useCreateStudyContents(content)
    await createStudyContents()
    setContent("")
    setSnackBarStatus({...snackBarStatus, open: true})
  }

  return (
    <div>
        <div className="p-8 flex flex-col justify-center justify-items-center">
            <div className="text-center p-3 stroke-inherit text-xl text-stone-600">学習コンテンツを登録する</div>
            <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
                <ContentsInputContent contentErrFlag={contentErrFlag}/>
                <div className="p-2 my-2">
                    <RegisterButton clickHandler={clickHandler} text="登録する" />
                </div>
            </div>
        </div>
    </div>
  )
}
