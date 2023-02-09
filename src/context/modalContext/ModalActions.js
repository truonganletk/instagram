import { HIDE_MODAL, SHOW_MODAL, UPDATE_DATA } from "./ModalType";

export const showModal = (modal, title) => ({
  type: SHOW_MODAL,
  modal,
  title
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

export const updateData = (data) => ({
  type: UPDATE_DATA,
  data,
})