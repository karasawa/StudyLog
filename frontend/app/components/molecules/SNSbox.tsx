import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function SNSbox() {
  return (
    <div className=" text-white p-3 flex justify-end items-center">
        <InstagramIcon className="text-5xl text-stone-600 mr-2 cursor-pointer hover:text-stone-800"/>
        <TwitterIcon className="text-5xl text-stone-600 mr-2 cursor-pointer hover:text-stone-800"/>
        <FacebookIcon className="text-5xl text-stone-600 cursor-pointer hover:text-stone-800"/>
    </div>
  )
}
