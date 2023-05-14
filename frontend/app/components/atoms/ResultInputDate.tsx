"use client";

import React, {memo} from 'react'
import { format } from 'date-fns'

function ResultInputDate() {
  const today = format(new Date(), 'yyyy-MM-dd')

  return (
    <div className="p-2 flex flex-col">
        <label htmlFor="date">学習日</label>
        <select disabled id="date" className="mt-1 p-1 border-2 rounded disabled bg-gray-200 border-stone-400">
            <option>{today}</option>
        </select>
    </div>
  )
}

export default memo(ResultInputDate)
