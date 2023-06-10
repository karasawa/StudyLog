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
    <div className="flex justify-start items-center w-3/4">
        <li>{report.content} … {report.time}h</li>
    </div>
  )
}

export default memo(RecentReportItem)