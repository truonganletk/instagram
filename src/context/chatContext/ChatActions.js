import { CHANGE_USER } from "./ChatType"


export const changeUser = (user) => ({
  type: CHANGE_USER,
  payload: user,
})