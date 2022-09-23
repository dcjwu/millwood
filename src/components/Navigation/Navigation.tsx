import React from "react"

import Image from "next/image"

import logo from "@assets/images/Logo.svg"
import { Text } from "@lib/Text/Text"

import s from "./Navigation.module.scss"


export const Navigation: React.FC = (): JSX.Element => {
   return (
      <nav className={s.wrapper}>
         <Image alt="Millwood.lv" height={200}
                src={logo} width={200}/>
         <ul className={s.list}>
            <li>
               <a href="#home">
                  Home
               </a>
            </li>
            <li>
               <a href="#products">
                  Products
               </a>
            </li>
            <li><a href="#about">
               About
            </a>
            </li>
            <li>
               <a href="#contact">
                  Get in touch
               </a>
            </li>
         </ul>
         <div className={s.contact}>
            <a href="tel:+37122012202">
               <Text color="300" component="span" variant="paragraph">
                  +37122012202
               </Text>
            </a>
            <a href="mailto:info@millwood.lv">
               <Text color="300" component="span" variant="paragraph">
                  info@millwood.lv
               </Text>
            </a>
         </div>
      </nav>
   )
}