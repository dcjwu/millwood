import React from "react"

import classNames from "classnames/bind"

import type { HeadingType } from "@customTypes/lib/heading.type"

import s from "./Heading.module.scss"

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