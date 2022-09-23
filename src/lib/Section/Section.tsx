import React from "react"

import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import type { SectionType } from "@customTypes/lib/section.type"

import s from "./Section.module.scss"

export const Section: React.FC<SectionType> = ({
   title,
   subtitle,
   id,
   children,
   ...props
}): JSX.Element => {

   return (
      <section id={id} {...props}
               className={s.section}>
         <div className={s.wrapper}>
            <div className={s.title}>
               <Heading color="white" component="h2"
                        variant="h1">
                  {title}
               </Heading>

               {subtitle && <Text color="brand" component="p" style={{
                  textAlign: "center",
                  marginTop: ".8rem"
               }}
                                  variant="paragraph">
                  {subtitle}
               </Text>}

            </div>
            {children}
         </div>
      </section>
   )
}