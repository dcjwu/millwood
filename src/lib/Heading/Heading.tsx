import React from "react"

import classNames from "classnames/bind"

import s from "./Heading.module.scss"

type HeadingType = {
   component: "h1" | "h2" | "h3" | "h4" | "p"
   variant: "display" | "h1" | "h2" | "h3"
   color: "brand" | "white" | "300" | "400" | "600" | "1000" | "bg"
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