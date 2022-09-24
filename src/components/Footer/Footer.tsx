import React from "react"

import { Text } from "@lib/Text/Text"

import s from "./Footer.module.scss"

export const Footer: React.FC = (): JSX.Element => {
   return (
      <div className={s.footer}>
         <div>
            <Text color="white" component="p" variant="paragraph">
               &quot;Millhouse Trade&quot; SIA
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Reg Nr: 440203387800
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Riga, Latvia
            </Text>
         </div>
         <div>
            <Text color="white" component="p" variant="paragraph">
               &quot;Millhouse Trade&quot; SIA
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Reg Nr: 440203387800
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Riga, Latvia
            </Text>
         </div>
         <div>
            <Text color="white" component="p" variant="paragraph">
               &quot;Millhouse Trade&quot; SIA
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Reg Nr: 440203387800
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Riga, Latvia
            </Text>
         </div>
      </div>
   )
}