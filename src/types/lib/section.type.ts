import React from "react"

export type SectionType = {
   title: string
   subtitle?: string
   id?: string
   children: React.ReactNode
   [k: string]: unknown
}