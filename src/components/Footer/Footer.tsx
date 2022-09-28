import React from "react"

import { Text } from "@lib/Text/Text"

import s from "./Footer.module.scss"

export const Footer: React.FC = (): JSX.Element => {
   return (
      <div className={s.footer}>
         <div>
            <Text color="white" component="p" variant="paragraph">
               SIA &quot;Millhouse Trade&quot;
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Reg Nr: 440203387800
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Pils Laukums 4-1, Riga, LV-1050, Latvia
            </Text>
            <Text color="white" component="p" variant="paragraph">
               <a href="tel:+37126622113">
                  +371 26622113
               </a>
            </Text>
            <Text color="white" component="p" variant="paragraph">
               <a href="mailto:info@millwood.lv">
                  info@millwood.lv
               </a>
            </Text>
         </div>
         <div>
            <Text color="white" component="p" variant="paragraph">
               Representative in Belgium:
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Rue Sneessens 1, 1040 Etterbeek, 1040 Belgium
            </Text>
            <Text color="white" component="p" variant="paragraph">
               <a href="tel:+32477974797">+324 77974797</a>
            </Text>
            <Text color="white" component="p" variant="paragraph">
               <a href="mailto:benelux@millwood.lv">benelux@millwood.lv</a>
            </Text>
         </div>
         <div>
            <Text color="white" component="p" variant="paragraph">
               Representative in Ukraine:
            </Text>
            <Text color="white" component="p" variant="paragraph">
               Yevhena Konovaltsia St, 36, Kyiv, Ukraine, 02000
            </Text>
            <Text color="white" component="p" variant="paragraph">
               <a href="tel:+380672453950">+380 672453950</a>
            </Text>
         </div>
      </div>
   )
}