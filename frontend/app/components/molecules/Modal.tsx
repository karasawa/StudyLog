"use client";

import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useStore from '../../store/index'

export default function Modal() {
  const modalIsOpen = useStore((state) => state.modalIsOpen)
  const setModalIsOpen = useStore((state) => state.setModalIsOpen)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="w-96 p-8 flex flex-col justify-center justify-items-center">
            <div className="p-2 flex flex-col justify-center justify-items-center border border-gray-300 rounded">
                <div className="p-2 flex flex-col">
                    <label htmlFor="content">学習コンテンツ</label>
                    <select id="content" className="mt-1 p-1 border border-gray-300 rounded">
                        <option>aaa</option>
                        <option>aaa</option>
                        <option>aaa</option>
                    </select>
                </div>
                <div className="p-2 flex flex-col">
                    <label htmlFor="time">学習時間</label>
                    <select id="time" className="mt-1 p-1 border border-gray-300 rounded">
                        <option>aaa</option>
                        <option>aaa</option>
                        <option>aaa</option>
                    </select>
                </div>
            </div>
            <div className="p-2 flex flex-col justify-center justify-items-center border border-gray-300 rounded">
            <div className="p-2 flex flex-col">
                    <label htmlFor="content">学習コンテンツ</label>
                    <select id="content" className="mt-1 p-1 border border-gray-300 rounded">
                        <option>aaa</option>
                        <option>aaa</option>
                        <option>aaa</option>
                    </select>
                </div>
                <div className="p-2 flex flex-col">
                    <label htmlFor="time">学習時間</label>
                    <select id="time" className="mt-1 p-1 border border-gray-300 rounded">
                        <option>aaa</option>
                        <option>aaa</option>
                        <option>aaa</option>
                    </select>
                </div>
            </div>
        </div>
      </Dialog>
    </>
  );
}