"use client";

import React, { useEffect } from 'react'
import useStore from '../../store/index'
import TimelineItems from '../atoms/TimelineItems';
import useListTimeline from '@/fooks/useListTimeline';

export default function ResultInput() {
    const timelineList = useStore((state) => state.timelineList)
    const setTimelineList = useStore((state) => state.setTimelineList)

    useEffect(() => {
        const list_timeline = async() => {
            const { listTimeline } = useListTimeline(setTimelineList)
            await listTimeline()
        }
        list_timeline()
    }, [])

  return (
    <div className="flex flex-col overflow-scroll timeline" style={{height: "89%"}}>
        {timelineList.map((timeline) => (
            <TimelineItems key={timeline.id} timeline={timeline}/>
        ))}
    </div>
  )
}
