import create from 'zustand'

type State = {
    modalIsOpen: boolean
    setModalIsOpen: (payload: boolean) => void
}

const useStore = create<State>((set) => ({
  modalIsOpen: false,
  setModalIsOpen: (payload) =>
    set({ modalIsOpen: payload }),
}))

export default useStore