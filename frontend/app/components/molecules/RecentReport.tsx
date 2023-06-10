"use client";

import React, { useEffect } from 'react'
import useStore from '../../store/index'
import useGetRecentReport from '@/fooks/useGetRecentReport'
import { format } from 'date-fns'
import RecentReportItem from '../atoms/RecentReportItem';

export default function RecentReport() {
  const recentReportList = useStore((state) => state.recentReportList)
  const setRecentReportList = useStore((state) => state.setRecentReportList)
  const yesterdayBase = new Date()
  const dayBeforYesterdayBase = new Date()
  const yesterday = format(yesterdayBase.setDate(yesterdayBase.getDate() - 1), 'yyyy-MM-dd')
  const yesterdayDisplay = format(yesterdayBase.setDate(yesterdayBase.getDate()), 'M/d')
  const dayBeforYesterday = format(dayBeforYesterdayBase.setDate(dayBeforYesterdayBase.getDate() - 2), 'yyyy-MM-dd')
  const dayBeforYesterdayDisplay = format(dayBeforYesterdayBase.setDate(dayBeforYesterdayBase.getDate()), 'M/d')

  useEffect(() => {
    const get_recent_report = async() => {
        const { getRecentReport } = useGetRecentReport(setRecentReportList)
        await getRecentReport()
    }
    get_recent_report()
  }, [])

  return (
    <div className="h-2/5 border-t-4 border-stone-400 flex flex-col items-center">
        <div className="text-center p-3 stroke-inherit text-xl text-stone-600 h-1/5">最近の記録</div>
        <div className="w-3/5 recent-records-box flex flex-col justify-start items-start overflow-scroll" style={{height: "65%"}}>
          <div className="border-stone-400 border-2 px-2 py-0 rounded-md">昨日（{yesterdayDisplay}）</div>
            <div className="flex flex-col items-center justify-center w-full">
              {recentReportList.map((report) => (yesterday === report.date &&
                <RecentReportItem key={report.id} report={report} />
              ))}
            </div>
          <div className="border-stone-400 border-2 px-2 py-0 mt-2 rounded-md">一昨日（{dayBeforYesterdayDisplay}）</div>
            <div className="flex flex-col items-center justify-center w-full">
              {recentReportList.map((report) => (dayBeforYesterday === report.date &&
                <RecentReportItem key={report.id} report={report} />
              ))}
            </div>
        </div>
    </div>
)
}
