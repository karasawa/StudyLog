"use client";

import React, {useState} from 'react'
import useStore from '../../store/index'
import RegisterButton from '../atoms/RegisterButton';
import ObjectiveInputObjective from '../atoms/ObjectiveInputObjective';
import ObjectiveInputDeadline from '../atoms/ObjectiveInputDeadline';
import useCreateObjective from '@/fooks/useCreateObjective';

export default function ResultInput() {
  const objective = useStore((state) => state.objective)
  const resetObjective = useStore((state) => state.resetObjective)
  const [objectiveErrFlag, setObjectiveErrFlag] = useState<boolean>(false)
  const [deadlineErrFlag, setDeadlineErrFlag] = useState<boolean>(false)

  const clickHandler = async() => {
    setObjectiveErrFlag(false)
    setDeadlineErrFlag(false)
    if(objective.objective === ""){setObjectiveErrFlag(true)}
    if(objective.deadline === ""){setDeadlineErrFlag(true)}
    if(objectiveErrFlag || deadlineErrFlag){
        return
    }
    const { createObjective } = useCreateObjective(objective.objective,
                                                   objective.deadline)
    await createObjective()
    resetObjective()
  }

  return (
    <div>
        <div className="p-8 flex flex-col justify-center justify-items-center">
            <div className="text-center p-3 stroke-inherit text-xl text-stone-600">学習目標・達成期限を設定する</div>
            <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
                <ObjectiveInputObjective objectiveErrFlag={objectiveErrFlag}/>
                <ObjectiveInputDeadline deadlineErrFlag={deadlineErrFlag}/>
                <div className="p-2 my-2">
                    <RegisterButton clickHandler={clickHandler} text="設定する" />
                </div>
            </div>
        </div>
    </div>
  )
}
