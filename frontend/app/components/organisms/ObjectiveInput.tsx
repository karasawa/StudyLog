"use client";

import React, { useState, useEffect } from 'react'
import useStore from '../../store/index'
import RegisterButton from '../atoms/RegisterButton';
import ObjectiveInputObjective from '../atoms/ObjectiveInputObjective';
import ObjectiveInputDeadline from '../atoms/ObjectiveInputDeadline';
import useCreateObjective from '@/fooks/useCreateObjective';
import useGetObjective from '@/fooks/useGetObjective';
import useDateValidation from '@/fooks/useDateValidation';

export default function ObjectiveInput() {
  const objective = useStore((state) => state.objective)
  const setObjective = useStore((state) => state.setObjective)
  const [objectiveErrFlag, setObjectiveErrFlag] = useState<boolean>(false)
  const [deadlineErrFlag, setDeadlineErrFlag] = useState<boolean>(false)
  const [deadlineFmtFlag, setDeadlineFmtFlag] = useState<boolean>(false)
  const snackBarStatus = useStore((state) => state.snackBarStatus)
  const setSnackBarStatus = useStore((state) => state.setSnackBarStatus)

  useEffect(() => {
    const get_objective = async() => {
        const { getObjective } = useGetObjective(setObjective)
        await getObjective()
    }
    get_objective()
  }, [])

  const clickHandler = async() => {
    let flag = false
    const { dateValidation } = useDateValidation(objective.deadline)
    setObjectiveErrFlag(false)
    setDeadlineErrFlag(false)
    setDeadlineFmtFlag(false)
    if(objective.objective === ""){setObjectiveErrFlag(true)}
    if(objective.deadline === ""){setDeadlineErrFlag(true)}
    if(dateValidation()){setDeadlineFmtFlag(true), flag = true}
    if(objectiveErrFlag || deadlineErrFlag || deadlineFmtFlag || flag){
        return
    }
    const { createObjective } = useCreateObjective(objective.objective,
                                                   objective.deadline,
                                                   flag)
    await createObjective()
    setSnackBarStatus({...snackBarStatus, open: true})
  }

  return (
    <div>
        <div className="p-8 flex flex-col justify-center justify-items-center">
            <div className="text-center p-3 stroke-inherit text-xl text-stone-600">学習目標・達成期限を設定する</div>
            <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
                <ObjectiveInputObjective objectiveErrFlag={objectiveErrFlag}/>
                <ObjectiveInputDeadline deadlineErrFlag={deadlineErrFlag} deadlineFmtFlag={deadlineFmtFlag}/>
                <div className="p-2 my-2">
                    <RegisterButton clickHandler={clickHandler} text="設定する" />
                </div>
            </div>
        </div>
    </div>
  )
}
