import React from "react"

import { IProducts } from "@components/BlockProducts/BlockProducts"
import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import s from "./ProductsModal.module.scss"

type ProductsModal = {
   handleCloseModal: () => void
   data: IProducts | null
}

export const ProductsModal: React.FC<ProductsModal> = ({ handleCloseModal, data }): JSX.Element => {
   return (
      <>
         {data && <div className={s.wrapper}>
            <div className={s.modal}>
               <svg fill="none" height="27" viewBox="0 0 27 27"
                    width="27"
                    xmlns="http://www.w3.org/2000/svg" onClick={handleCloseModal}>
                  <path d="M22.1121 22.1122C26.7984 17.4259 26.7984 9.82796 22.1121 5.14167C17.4258 0.45538 9.82782 0.455381 5.14153 5.14167C0.45524 9.82796 0.45524 17.4259 5.14153 22.1122C9.82782 26.7985 17.4258 26.7985 22.1121 22.1122Z"
                     stroke="#272727" strokeLinecap="round"
                     strokeLinejoin="round" strokeWidth="1.5"/>
                  <path d="M10.0938 17.1621L17.1648 10.091" stroke="#272727" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5"/>
                  <path d="M10.0938 10.0918L17.1648 17.1629" stroke="#272727" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5"/>
               </svg>

               <div className={s.content}>
                  <Heading color="1000" component="h3" variant="h2">
                     {data.name}
                  </Heading>
                  <Text color="1000" component="p" variant="paragraph-lg">
                     {data.description}
                  </Text>
               </div>
            </div>
         </div>}
      </>
   )
}