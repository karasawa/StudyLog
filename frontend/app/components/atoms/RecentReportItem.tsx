import React, { memo } from 'react'

type Props = {
    report: {
        id: number
        content: string
        date: string
        time: string
        memo: string
    }
}

function RecentReportItem({ report }: Props) {
  return (
    <div className="flex justify-evenly items-center w-full">
        <li>{report.content} … {report.time}h</li>
    </div>
  )
}

export default memo(RecentReportItem)