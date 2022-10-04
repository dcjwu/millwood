import React from "react"

import classNames from "classnames/bind"
import Image from "next/image"
import { useRecoilValue } from "recoil"

import logo from "@assets/images/Logo.svg"
import { isNavVisibleState } from "@atoms/isNavVisibleState.atom"
import { NavContacts } from "@components/Nav/NavContacts"
import { NavLinks } from "@components/Nav/NavLinks"

import s from "./Nav.module.scss"

const cx = classNames.bind(s)

export const Nav: React.FC = (): JSX.Element => {

   const isNavVisible = useRecoilValue(isNavVisibleState)
   
   const classNamesNav = cx(s.nav, { show: isNavVisible })

   return (
      <div className={classNamesNav}>
         <Image alt="Millwood" height={166} src={logo}
                width={169}/>

         <div className={s.wrapper}>

            <NavLinks/>

            <NavContacts/>

         </div>

      </div>
   )
}