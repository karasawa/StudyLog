"use client";

import React, { memo, Dispatch, SetStateAction } from 'react'
import useStore from '../../store/index'

type Props = {
    deadlineErrFlag: boolean
    deadlineFmtFlag: boolean
    deadline: string
    setDeadline: Dispatch<SetStateAction<string>>
}

function ObjectiveInputDeadline({deadlineErrFlag, deadlineFmtFlag, deadline, setDeadline}: Props) {
  const objective = useStore((state) => state.objective)
  const setObjective = useStore((state) => state.setObjective)
  
  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="deadline">達成期限</label>
        <input id="deadline" placeholder="YYYY-MM-DD" className="rounded-md border-2 p-1 outline-none border-stone-400"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}/>
        <div className="text-red-400 text-sm">{deadlineErrFlag ? "達成期限を入力して下さい" : ""}</div>
        <div className="text-red-400 text-sm">{deadlineFmtFlag && !deadlineErrFlag ? "YYYY-MM-DD形式で入力して下さい" : ""}</div>
    </div>
  )
}

export default memo(ObjectiveInputDeadline)