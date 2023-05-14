"use client";

import React from 'react'

type Props = {
    clickHandler: () => Promise<void>
    text: string
}

export default function RegisterButton({clickHandler, text}: Props) {
  return (
    <button className="rounded-md bg-stone-600 text-white w-full p-2 hover:bg-stone-800"
            onClick={clickHandler}>{text}</button>
  )
}
