"use client";

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import useStore from '../../store/index'

export default function SnackBar() {
  const snackBarStatus = useStore((state) => state.snackBarStatus)
  const setSnackBarStatus = useStore((state) => state.setSnackBarStatus)
  
  const handleClose = () => {
    setSnackBarStatus({ ...snackBarStatus, open: false });
  }

  let vertical = snackBarStatus.vertical
  let horizontal = snackBarStatus.horizontal

  return (
    <>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={snackBarStatus.open}
            onClose={handleClose}
            message="登録が完了しました"
            key={vertical + horizontal}
        />
    </>
  )
}