"use client";

import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import useStore from '../../store/index'

export default function Calender() {
  const setModalStatus = useStore((state) => state.setModalStatus)
  const objective = useStore((state) => state.objective)

  const clickHander = (arg: DateClickArg) => {
    setModalStatus({isOpen: true, date: arg.dateStr})
  }

  const dummyTime: string = "T00:00:00"

  return (
    <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth" locale="ja" locales={allLocales}
        dateClick={clickHander}
        eventContent={renderEventContent}
        events={[
            // { title: "●", date: `2023-05-19${dummyTime}` },
            // { title: "●", date: `2023-05-17${dummyTime}` },
            // { title: "event 2", date: `2023-05-02${dummyTime}` },
            { title: `達成期限`, date: `${objective.deadline}${dummyTime}` },
        ]}/>
  )
}


function renderEventContent(eventInfo: any) {
  return (
    <>
    {eventInfo.event.title === "達成期限" ?
      <div className="text-rose-400 mx-auto h-3 flex items-center">{eventInfo.event.title}</div>
      :
    <div className="text-stone-400 h-2 mx-auto flex items-center">{eventInfo.event.title}</div>
    }
    </>
  )
}