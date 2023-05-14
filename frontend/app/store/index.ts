import create from 'zustand'
import { format } from 'date-fns'
import internal from 'stream'
const today = format(new Date(), 'yyyy-MM-dd')

type State = {
    modalIsOpen: boolean
    setModalIsOpen: (payload: boolean) => void
    result: {
      content: string
      date: string
      time: string
      memo: string
    }
    setResult: (payload: {
      content: string
      date: string
      time: string
      memo: string
    }) => void
    resetResult: () => void
    content: string
    setContent: (payload: string) => void
    contentsList: {
      id: number
      user: string
      content: string
    }[]
    setContentsList: (payload: {
      id: number
      user: string
      content: string
    }[]) => void
    recentReportList: {
      id: number
      user: string
      content: string
      date: string
      time: string
      memo: string
    }[]
    setRecentReportList: (payload: {
      id: number
      user: string
      content: string
      date: string
      time: string
      memo: string
    }[]) => void
}

const useStore = create<State>((set) => ({
  modalIsOpen: false,
  setModalIsOpen: (payload) =>
    set({ modalIsOpen: payload }),
  result: {
    content: "",
    date: today,
    time: "",
    memo: ""
  },
  setResult: (payload) =>
    set({
      result: {
        content: payload.content,
        date: today,
        time: payload.time,
        memo: payload.memo
      }
    }),
  resetResult: () =>
    set({
      result: {
        content: "",
        date: today,
        time: "",
        memo: ""
      }
    }),
  content: "",
  setContent: (payload) => 
    set({content: payload}),
  contentsList: [],
  setContentsList: (payload) =>
    set({ contentsList: payload }),
  recentReportList: [],
  setRecentReportList: (payload) =>
    set({ recentReportList: payload })
}))

export default useStore