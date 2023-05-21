"use client";

import React, { memo } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function TimelineIcons() {
  return (
    <div className="flex justify-evenly items-center w-full h-1/3">
        <FavoriteBorderIcon className="cursor-pointer"/>
        <ChatBubbleOutlineIcon className="cursor-pointer"/>
    </div>
)
}

export default memo(TimelineIcons)