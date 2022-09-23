import React from "react"

export type TextType = {
   component: "p" | "span" | "li" | "h3"
   variant: "paragraph" | "paragraph-lg" | "label"
   color: "brand" | "white" | "300" | "400" | "600" | "1000"
   isBold?: boolean
   children: React.ReactNode
   [k: string]: unknown
}