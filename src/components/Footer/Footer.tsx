import React from "react"

import { dbAddresses } from "@db/addresses"
import { Text } from "@lib/Text/Text"

import s from "./Footer.module.scss"

export const Footer: React.FC = (): JSX.Element => {
   return (
      <footer className={s.footer}>

         {dbAddresses.map(item => (
            <div key={item.title} className={s.item}>
               <Text isBold color="white" component="p"
                     variant="paragraph">
                  {item.title}
               </Text>

               {item.company && <Text color="white" component="p" variant="paragraph">{item.company}</Text>}
               {item.regNr && <Text color="white" component="p" variant="paragraph">Reg Nr: {item.regNr}</Text>}
               {item.address && <Text color="white" component="p" variant="paragraph">{item.address}</Text>}
               {item.phone && <Text color="white" component="p" variant="paragraph">{item.phone}</Text>}
               {item.email && <Text color="white" component="p" variant="paragraph">{item.email}</Text>}

            </div>
         ))}

      </footer>
   )
}