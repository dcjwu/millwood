import React from "react"

import classNames from "classnames/bind"
import { useRecoilState } from "recoil"

import { isBurgerMenuShown } from "@atoms/isBurgerMenuShown.atom"

import type { BurgerMenuButtonType } from "@customTypes/components"

import s from "./BurgerMenuButton.module.scss"

const cx = classNames.bind(s)

export const BurgerMenuButton: React.FC<BurgerMenuButtonType> = ({ ...props }): JSX.Element => {

   const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useRecoilState(isBurgerMenuShown)

   const classNamesButton = cx(s.button, { active: isBurgerMenuOpen })

   const handleToggleBurgerMenu = (): void => {
      setIsBurgerMenuOpen(prevState => !prevState)
   }

   React.useEffect(() => {
      document.body.style.overflow = isBurgerMenuOpen ? "hidden" : ""
   }, [isBurgerMenuOpen])

   return (
      <>
         <button aria-label="menu" {...props}
                 className={classNamesButton}
                 onClick={handleToggleBurgerMenu}>
            <span></span>
            <span></span>
         </button>
      </>
   )
}