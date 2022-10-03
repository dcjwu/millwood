import React from "react"

import Image from "next/image"

import { dbProducts } from "@db/products"
import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import s from "./Products.module.scss"

export const Products: React.FC = (): JSX.Element => {

   const handleGoToContact = (): void => {
      window.location.href = "#ContactUs"
   }

   return (
      <div className={s.products}>

         {dbProducts.map(item => (
            <div key={item.title} className={s.item}>
               <div className={s.imageWrapper}>
                  <Image alt={item.title} layout="fill"
                         objectFit="cover" quality={100} src={item.image}/>
               </div>
               <div className={s.info}>
                  <div>
                     <Heading color="white" component="h3" variant="h2">
                        {item.title}
                     </Heading>
                     <Text color="white" component="p" variant="paragraph-lg">
                        {item.description}
                     </Text>
                  </div>
                  <div className={s.buttonWrapper}>
                     <Button ariaLabel="get-quote" variant="primary" onClick={handleGoToContact}>
                        Get A Quote
                     </Button>
                  </div>
               </div>
            </div>
         ))}

      </div>
   )
}