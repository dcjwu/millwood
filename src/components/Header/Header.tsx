import React from "react"

import { dbHeader } from "@db/header"
import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import s from "./Header.module.scss"

export const Header: React.FC = (): JSX.Element => {

   const handleGoToBlock = (id: string): void => {
      window.location.href = `#${id}`
   }

   return (
      <header className={s.header} id="Home">
         <Heading color="white" component="h1" style={{ maxWidth: "24ch" }}
                  variant="display">
            {dbHeader.title}
         </Heading>
         <Text color="white" component="p"
               variant="paragraph-lg">
            {dbHeader.description}
         </Text>
         <div className={s.buttonWrapper}>
            <Button ariaLabel="contact-us" variant="primary" onClick={(): void => handleGoToBlock("ContactUs")}>
               <svg fill="none" height="16" viewBox="0 0 16 16"
                    width="16" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2_729)">
                     <path d="M14.7011 1.41948L0.525852 6.91404C-0.0445851 7.16992 -0.237523 7.68233 0.387977 7.96042L4.02454 9.12208L12.8173 3.65989C13.2974 3.31698 13.7889 3.40842 13.3659 3.78564L5.81416 10.6586L5.57695 13.5672C5.79667 14.0163 6.19898 14.0184 6.4556 13.7952L8.54492 11.808L12.1232 14.5014C12.9543 14.996 13.4065 14.6768 13.5853 13.7703L15.9324 2.59939C16.176 1.48361 15.7605 0.991981 14.7011 1.41948Z"
                           fill="white"/>
                  </g>
                  <defs>
                     <clipPath id="clip0_2_729">
                        <rect fill="white" height="16" width="16"/>
                     </clipPath>
                  </defs>
               </svg>
               <span>Contact Us</span>
            </Button>
            <Button ariaLabel="out-products" variant="secondary" onClick={(): void => handleGoToBlock("Products")}>
               Our Products
            </Button>
         </div>
      </header>
   )
}