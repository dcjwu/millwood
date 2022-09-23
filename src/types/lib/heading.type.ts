import React from "react"

export type HeadingType = {
   component: "h1" | "h2" | "h3" | "h4" | "p"
   variant: "display" | "h1" | "h2" | "h3"
   color: "brand" | "white" | "300" | "400" | "600" | "1000"
   children: React.ReactNode
   [k: string]: unknown
}