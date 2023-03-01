import { CHANGE_USER } from "./chatType"


export const changeUser = (user) => ({
  type: CHANGE_USER,
  payload: user,
})