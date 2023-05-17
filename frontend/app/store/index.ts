import create from 'zustand'
import { format } from 'date-fns'
const today = format(new Date(), 'yyyy-MM-dd')

type State = {
    modalStatus: {
      isOpen: boolean
      date: string
    }
    setModalStatus: (payload: {
      isOpen: boolean
      date: string
    }) => void
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
    objective: {
      objective: string
      deadline: string
    }
    setObjective: (payload: {
      objective: string
      deadline: string
    }) => void
    resetObjective: () => void
    profile: {
      username: string
    }
    setProfile: (payload: {
      username: string
    }) => void
}

const useStore = create<State>((set) => ({
  modalStatus: {
    isOpen: false,
    date: ""
  },
  setModalStatus: (payload) =>
    set({ 
      modalStatus: {
        isOpen: payload.isOpen,
        date: payload.date
      }
    }),
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
    set({ recentReportList: payload }),
  objective: {
    objective: "",
    deadline: ""
  },
  setObjective: (payload) =>
    set({
      objective: {
        objective: payload.objective,
        deadline: payload.deadline
      }
    }),
  resetObjective: () =>
    set({
      objective: {
        objective: "",
        deadline: ""
      }
    }),
  profile: {
    username: ""
  },
  setProfile: (payload) =>
    set({
      profile: {
        username: payload.username
      }
    })
}))

export default useStore