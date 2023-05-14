"use client";

import React, { memo } from 'react'
import useStore from '../../store/index'

type Props = {
    objectiveErrFlag: boolean
}

function ObjectiveInputObjective({objectiveErrFlag}: Props) {
  const objective = useStore((state) => state.objective)
  const setObjective = useStore((state) => state.setObjective)
    
  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="objective">学習目標</label>
        <input id="objective" className="rounded-md border-2 p-2 outline-none border-stone-400"
            value={objective.objective}
            onChange={(e) => setObjective({...objective, objective: e.target.value})}/>
        <div className="text-red-400 text-sm">{objectiveErrFlag ? "学習目標を入力して下さい" : ""}</div>
    </div>
  )
}

export default memo(ObjectiveInputObjective)