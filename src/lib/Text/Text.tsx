import React from "react"

import classNames from "classnames/bind"

import type { TextType } from "@customTypes/lib/text.type"

import s from "./Text.module.scss"

const cx = classNames.bind(s)

export const Text: React.FC<TextType> = ({
   component,
   variant,
   color,
   isBold,
   children,
   ...props
}): JSX.Element => {

   const classNamesText = cx(s.text, {
      [`c_${color}`]: `c_${[color]}`,
      [variant]: variant,
      bold: isBold
   })

   const Tag = component as React.ElementType

   return (
      <Tag {...props} className={classNamesText}>{children}</Tag>
   )
}