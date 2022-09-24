import React from "react"

export type SectionType = {
   title: string
   subtitle?: string
   id?: string
   isBrandBackGround?: boolean
   children: React.ReactNode
   [k: string]: unknown
}