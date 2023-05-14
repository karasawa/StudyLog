"use client";

import React, { useEffect } from 'react'
import useStore from '../../store/index'
import useGetRecentReport from '@/fooks/useGetRecentReport'

export default function RecentRecort() {
  const recentReportList = useStore((state) => state.recentReportList)
  const setRecentReportList = useStore((state) => state.setRecentReportList)
  
  useEffect(() => {
    const get_recent_report = async() => {
        const { getRecentReport } = useGetRecentReport(setRecentReportList)
        await getRecentReport()
    }
    get_recent_report()
  }, [])

  return (
    <div className="h-2/5 border-t-4 border-stone-400">
        <div className="text-center p-3 stroke-inherit text-xl text-stone-600 h-1/5">最近の記録</div>
        <div className="recent-records-box flex flex-col justify-start items-center overflow-scroll" style={{height: "65%"}}>
          {recentReportList.map((report) => (
            <div key={report.id} className="flex justify-evenly items-center w-full">
              <div className="w-full text-center">{report.date}</div>
              <div className="w-full text-center">{report.content}</div>
              <div className="w-full text-center">{report.time}</div>
            </div>
          ))}
        </div>
    </div>
)
}
