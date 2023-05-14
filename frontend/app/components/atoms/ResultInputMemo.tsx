"use client";

import React, { memo } from 'react'
import useStore from '../../store/index'

function ResultInputMemo() {
  const result = useStore((state) => state.result)
  const setResult = useStore((state) => state.setResult)

  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="memo">メモ</label>
        <textarea id="memo" className="rounded-md border-2 p-2 outline-none border-stone-400"
                value={result.memo}
                onChange={(e) => setResult({ ...result, memo: e.target.value})}/>
    </div>
  )
}

export default memo(ResultInputMemo)