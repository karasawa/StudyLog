"use client";

import React, { useState, useEffect } from 'react'
import Cookie from 'universal-cookie'
import { Buffer } from 'buffer'

const cookie = new Cookie()

export default function GraphArea() {
  const [timeReport, setTimeReport] = useState('');
  const [contentsReport, setContentsReport] = useState('');

  useEffect(() => {
    const get_report = async() => {
        await fetch(new URL(`http://localhost:8080/report`), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get("access_token")}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
          const buf_a = Buffer.from(data.time_report, "base64")
          const blob_a = new Blob([buf_a], { type: "image/png" })
          const uri_a = window.URL.createObjectURL(blob_a)
          setTimeReport(uri_a)

          const buf_b = Buffer.from(data.contents_report, "base64")
          const blob_b = new Blob([buf_b], { type: "image/png" })
          const uri_b = window.URL.createObjectURL(blob_b)
          setContentsReport(uri_b)
        })
    }
    get_report()
  }, [])

  return (
    <div style={{height: "100%"}} className="overflow-scroll graph_area">
        <div className="p-6">
            {timeReport !== '' && (
                <img src={timeReport}/>
            )}        
        </div>
        <div className="p-6">
            {contentsReport !== '' && (
                <img src={contentsReport}/>
            )}        
        </div>
    </div>
  )
}
