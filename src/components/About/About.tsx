import React from "react"

import Image from "next/image"

import logo from "@assets/images/Logo.svg"
import { dbAbout, dbPartnership } from "@db/about"
import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import s from "./About.module.scss"

export const About: React.FC = (): JSX.Element => {
   return (
      <>
         <div className={s.about}>
            <Text color="white" component="p" variant="paragraph-lg">
               {dbAbout}
            </Text>
            <Image alt="Millwood" height={291} src={logo}
                   style={{ opacity: ".5" }}
                   width={294}/>
         </div>
         <div className={s.partner}>
            <Heading color="white" component="p" variant="h1">
               {dbPartnership.title}
            </Heading>
            <Text color="white" component="p" variant="paragraph-lg">
               {dbPartnership.description}
            </Text>
            <form action="https://calendly.com/artyom-millwood/30min" target="_blank">
               <Button ariaLabel="book-a-call" variant="primary">
                  Book a call
               </Button>
            </form>
         </div>
      </>
   )
}