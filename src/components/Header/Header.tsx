import React from "react"

import { Navigation } from "@components/Navigation/Navigation"
import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import s from "./Header.module.scss"

export const Header: React.FC = (): JSX.Element => {

   const ref = React.useRef<HTMLDivElement>(null)

   return (
      <>
         <Navigation/>

         <header ref={ref} className={s.wrapper}
                 id="home">
            <div className={s.inner}>
               <Heading color="white" component="p" data-aos="fade-down"
                        style={{ textAlign: "center" }}
                        variant="display">
                  MILLWOOD
               </Heading>
               <Text color="white" component="p" data-aos="fade-down"
                     style={{ textAlign: "center" }} variant="paragraph-lg">
                  Millwood is the company specialising in eco-friendly fuel production. We are Latvia-based company with
                  branches in Poland and Ukraine, producing top quality wood pellet and firework. Millwood is your
                  reliable partner during cold European winters.
               </Text>
               <a data-aos="fade-up" href="#contact">
                  <Button ariaLabel="contact-us" style={{ display: "block", margin: "0 auto" }} variant="primary">
                     Get in Touch
                  </Button>
               </a>
            </div>
         </header>
      </>
   )
}