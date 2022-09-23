import { atom } from "recoil"

export const isBurgerMenuShown = atom<boolean>({
   key: "isBurgerMenuShown",
   default: false
})