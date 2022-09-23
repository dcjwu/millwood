import React from "react"

import { Button } from "@lib/Button/Button"
import { Text } from "@lib/Text/Text"

import s from "./Header.module.scss"

export const Header: React.FC = (): JSX.Element => {
   return (
      <div className={s.wrapper}>
         <Text color="white" component="p" style={{ textAlign: "center" }}
               variant="paragraph-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu pulvinar felis suscipit lobortis
            commodo sit amet leo. Morbi hendrerit a purus sed rhoncus. Phasellus enim ante, pulvinar quis magna non,
            maximus ultrices ante. Donec rutrum id dolor id convallis.
         </Text>
         <a href="#contact">
            <Button ariaLabel="contact-us" variant="primary">
               Get in touch
            </Button>
         </a>
      </div>
   )
}