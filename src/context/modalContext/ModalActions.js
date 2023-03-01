import { HIDE_MODAL, SHOW_MODAL, UPDATE_DATA } from "./modalType";

export const showModal = (modal, title, navigate) => ({
  type: SHOW_MODAL,
  modal,
  title,
  navigate
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

export const updateData = (data) => ({
  type: UPDATE_DATA,
  data,
})