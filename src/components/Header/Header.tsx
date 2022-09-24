import React from "react"

import { Navigation } from "@components/Navigation/Navigation"
import { Button } from "@lib/Button/Button"
import { Text } from "@lib/Text/Text"

import s from "./Header.module.scss"

export const Header: React.FC = (): JSX.Element => {
   
   const ref = React.useRef<HTMLDivElement>(null)
   
   return (
      <>
         <Navigation/>

         <header ref={ref} className={s.wrapper}>
            <Text color="white" component="p" style={{ textAlign: "center" }}
                  variant="paragraph-lg">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu pulvinar felis suscipit lobortis
               commodo sit amet leo. Morbi hendrerit a purus sed rhoncus. Phasellus enim ante, pulvinar quis magna non,
               maximus ultrices ante. Donec rutrum id dolor id convallis.
            </Text>
            <a href="#contact">
               <Button ariaLabel="contact-us" variant="primary">
                  Get in Touch
               </Button>
            </a>
         </header>
      </>
   )
}