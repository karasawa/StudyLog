"use client";

import React from 'react'
import { format } from 'date-fns'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ResultInput() {
  const today = format(new Date(), 'yyyy-MM-dd')
  return (
    <div>
        <div className="p-8 flex flex-col justify-center justify-items-center">
            <div className="text-center p-3 stroke-inherit text-xl text-stone-600">学習成果を記録する</div>
            <div className="p-2 flex flex-col justify-center justify-items-center border-2 border-stone-400 rounded">
                <div className="p-2 flex flex-col">
                    <label htmlFor="content">学習コンテンツ</label>
                    <select id="content" className="mt-1 p-1 border-2 rounded outline-none border-stone-400">
                        <option>aaa</option>
                        <option>aaa</option>
                        <option>aaa</option>
                    </select>
                </div>
                <div className="p-2 flex flex-col">
                    <label htmlFor="date">学習日</label>
                    <select disabled id="date" className="mt-1 p-1 border-2 rounded disabled bg-gray-200 border-stone-400">
                        <option>{today}</option>
                    </select>
                </div>
                <div className="p-2 flex flex-col">
                    <label htmlFor="time">学習時間</label>
                    <select id="time" className="mt-1 p-1 border-2 rounded outline-none border-stone-400">
                        <option>1.0</option>
                        <option>1.5</option>
                        <option>2.0</option>
                        <option>2.5</option>
                        <option>3.0</option>
                        <option>3.5</option>
                        <option>4.0</option>
                        <option>4.5</option>
                        <option>5.0</option>
                        <option>5.5</option>
                        <option>6.0</option>
                        <option>6.5</option>
                        <option>7.0</option>
                        <option>7.5</option>
                        <option>8.0</option>
                    </select>
                </div>
                <div className="p-2 flex flex-col">
                    <label htmlFor="memo">メモ</label>
                    <textarea className="rounded-md border-2 p-2 outline-none border-stone-400"/>
                </div>
                <div className="p-2 my-2">
                    <button className="rounded-md bg-stone-600 text-white w-full p-2 hover:bg-stone-800">記録する</button>
                </div>
            </div>
            <div className=" text-white p-3 flex justify-end items-center">
                <InstagramIcon className="text-5xl text-stone-600 mr-2 cursor-pointer hover:text-stone-800"/>
                <TwitterIcon className="text-5xl text-stone-600 mr-2 cursor-pointer hover:text-stone-800"/>
                <FacebookIcon className="text-5xl text-stone-600 cursor-pointer hover:text-stone-800"/>
            </div>
        </div>
    </div>
  )
}
