"use client";

import React, { memo } from 'react'
import useStore from '../../store/index'

type Props = {
    deadlineErrFlag: boolean
    deadlineFmtFlag: boolean
}

function ObjectiveInputDeadline({deadlineErrFlag, deadlineFmtFlag}: Props) {
  const objective = useStore((state) => state.objective)
  const setObjective = useStore((state) => state.setObjective)
  
  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="deadline">達成期限</label>
        <input id="deadline" className="rounded-md border-2 p-2 outline-none border-stone-400"
            value={objective.deadline}
            onChange={(e) => setObjective({...objective, deadline: e.target.value})}/>
        <div className="text-red-400 text-sm">{deadlineErrFlag ? "達成期限を入力して下さい" : ""}</div>
        <div className="text-red-400 text-sm">{deadlineFmtFlag && !deadlineErrFlag ? "YYYY-MM-DD形式で入力して下さい" : ""}</div>
    </div>
  )
}

export default memo(ObjectiveInputDeadline)