import React from "react"

import { Heading } from "@lib/Heading/Heading"

import s from "./Section.module.scss"

type SectionType = {
   id: string
   header: string
   children: React.ReactNode
   [k: string]: unknown
}

export const Section: React.FC<SectionType>= ({ id, header, children , ...props }): JSX.Element => {

   return (
      <section className={s.section} {...props}>
         <div className={s.anchor} id={id}></div>
         
         <Heading color="white" component="h2" variant="h1">
            {header}
         </Heading>
         
         <div className={s.wrapper}>
            {children}
         </div>
      </section>
   )
}