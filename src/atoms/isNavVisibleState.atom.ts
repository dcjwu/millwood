import { atom } from "recoil"

export const isNavVisibleState = atom<boolean>({
   key: "isNavVisibleState",
   default: false
})