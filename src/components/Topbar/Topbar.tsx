import React from "react"

import classNames from "classnames/bind"
import { useRecoilState } from "recoil"

import { isNavVisibleState } from "@atoms/isNavVisibleState.atom"

import s from "./Topbar.module.scss"

const cx = classNames.bind(s)

export const Topbar: React.FC = (): JSX.Element => {
   
   const [isNavVisible, setIsNavVisible] = useRecoilState(isNavVisibleState)

   const classNamesTopbar = cx(s.topbar, { show: isNavVisible })
   const classNamesButton = cx(s.button, { show: isNavVisible })
   
   const handleToggleBurgerMenu = (): void => {
      setIsNavVisible(prevState => !prevState)
   }
   
   return (
      <div className={classNamesTopbar}>
         <div className={s.buttonWrapper}>
            <button aria-label="menu"
                    className={classNamesButton}
                    onClick={handleToggleBurgerMenu}>
               <span></span>
               <span></span>
            </button>
         </div>
      </div>
   )
}