import React from "react"

import classNames from "classnames/bind"

import s from "./Heading.module.scss"

type HeadingType = {
   component: "h1" | "h2" | "h3" | "p"
   variant: "display" | "h1" | "h2"
   color: "brand-v1" | "brand-v2" | "brand-v3" | "white" | "grey" | "black"
   children: React.ReactNode
   [k: string]: unknown
}

const cx = classNames.bind(s)

export const Heading: React.FC<HeadingType> = ({
   component,
   variant,
   color,
   children,
   ...props
}): JSX.Element => {

   const classNamesHeading = cx(s.heading, {
      [`c_${color}`]: `c_${[color]}`,
      [variant]: variant
   })

   const Tag = component as React.ElementType

   return (
      <Tag {...props} className={classNamesHeading}>{children}</Tag>
   )
}