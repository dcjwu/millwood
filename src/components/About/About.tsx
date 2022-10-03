import React from "react"

import Image from "next/image"

import logo from "@assets/images/Logo.svg"
import { dbAbout } from "@db/about"
import { Text } from "@lib/Text/Text"

import s from "./About.module.scss"

export const About: React.FC = (): JSX.Element => {
   return (
      <div className={s.about}>
         <Text color="white" component="p" variant="paragraph-lg">
            {dbAbout}
         </Text>
         <Image alt="Millwood" height={291} src={logo}
                style={{ opacity: ".5" }}
                width={294}/>
      </div>
   )
}