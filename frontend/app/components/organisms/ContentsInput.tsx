"use client";

import React, {useState} from 'react'
import useStore from '../../store/index'
import useCreateStudyContents from '../../fooks/useCreatrStudyContents';

export default function ResultInput() {
  const content = useStore((state) => state.content)
  const setContent = useStore((state) => state.setContent)
  const [contentErrFlag, setContentErrFlag] = useState<boolean>(false)

  const clickHandler = async() => {
    setContentErrFlag(false)
    if(content === ""){setContentErrFlag(true)}
    if(contentErrFlag){
        return
    }
    const { createStudyContents } = useCreateStudyContents(content)
    await createStudyContents()
    setContentErrFlag(false)
    setContent("")
  }

  return (
    <div>
        <div className="p-8 flex flex-col justify-center justify-items-center">
            <div className="text-center p-3 stroke-inherit text-xl text-stone-600">学習コンテンツを登録する</div>
            <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
                <div className="p-2 flex flex-col">
                    <label htmlFor="content">学習コンテンツ</label>
                    <input id="content" className="rounded-md border-2 p-2 outline-none border-stone-400"
                           value={content}
                           onChange={(e) => setContent(e.target.value)}/>
                    <div className="text-red-400 text-sm">{contentErrFlag ? "学習コンテンツを入力して下さい" : ""}</div>
                </div>
                <div className="p-2 my-2">
                    <button className="rounded-md bg-stone-600 text-white w-full p-2 hover:bg-stone-800"
                            value={content}
                            onClick={clickHandler}>登録する</button>
                </div>
            </div>
        </div>
    </div>
  )
}
