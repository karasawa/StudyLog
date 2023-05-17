"use client";

import React from 'react'
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useStore from '../../store/index'
import ModalItem from '../molecules/ModalItem';

export default function Modal() {
  const modalStatus = useStore((state) => state.modalStatus)
  const setModalStatus = useStore((state) => state.setModalStatus)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const recentReportList = useStore((state) => state.recentReportList)

  const handleClose = () => {
    setModalStatus({isOpen: false, date: ""});
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={modalStatus.isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="w-96 p-8 flex flex-col justify-center justify-items-center text-stone-600 font-bold">
            <div className="p-2">{modalStatus.date}</div>
            {recentReportList.map((report) => (
              report.date === modalStatus.date &&
              <ModalItem key={report.id} report={report} />
            ))}
        </div>
      </Dialog>
    </>
  );
}