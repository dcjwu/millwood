import React from "react"

import classNames from "classnames/bind"

import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import type { SectionType } from "@customTypes/lib"

import s from "./Section.module.scss"

const cx = classNames.bind(s)

export const Section: React.FC<SectionType> = ({
   title,
   subtitle,
   id,
   isBrandBackGround,
   children,
   ...props
}): JSX.Element => {
   
   const classNamesSection = cx(s.section, { brand: isBrandBackGround })

   return (
      <section id={id} {...props}
               className={classNamesSection}>
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