"use client";

import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import useStore from '../../store/index'

export default function Calender() {
  const setModalIsOpen = useStore((state) => state.setModalIsOpen)

  const clickHander = (arg: DateClickArg) => {
      setModalIsOpen(true)
  }

  return (
    <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth" locale="ja" locales={allLocales}
        dateClick={clickHander}
        events={[
            { title: "event 1", date: `2023-05-01` },
            { title: "event 2", date: `2023-05-02` },
        ]}/>
  )
}
