import React from "react"

import Image from "next/image"

import birchlogs from "@assets/images/birchlogs.webp"
import other from "@assets/images/other.webp"
import woodpellets from "@assets/images/woodpellets.webp"
import { ProductsModal } from "@components/BlockProducts/ProductsModal"
import { Button } from "@lib/Button/Button"
import { Text } from "@lib/Text/Text"

import type { StaticImageData } from "next/image"

import s from "./BlockProducts.module.scss"

export interface IProducts {
   name: string,
   description: string
   image: StaticImageData
}

const products: IProducts[] = [
   {
      name: "Wood Pellets",
      description: "We produce and distribute class A1 and ST1, 6mm pellets made from spruce and pine wood.",
      image: woodpellets
   },
   {
      name: "Birch Firewoods",
      description: "We distribute kiln dried birch firewood in 20 L and 40 L bags. Size: 25-30 cm (as per request), Moisture: up to 18%.",
      image: birchlogs
   },
   {
      name: "Other Wood Products",
      description: "We offer different product made from pine-tree, spruce, cedar and larch as per your request.",
      image: other
   },
]

export const BlockProducts: React.FC = (): JSX.Element => {

   const [showModal, setShowModal] = React.useState<boolean>(false)
   const [data, setData] = React.useState<IProducts | null>(null)

   const handleOpenModal = (item: IProducts): void => {
      setData(item)
      document.body.style.overflow = "hidden"
      setShowModal(true)
   }

   const handleCloseModal = (): void => {
      document.body.style.overflow = "initial"
      setShowModal(false)
      setData(null)
   }

   return (
      <>
         <div className={s.wrapper} data-aos="fade-down">

            {products.map(item => (
               <div key={item.name} className={s.item}>
                  <div className={s.image} role="presentation" onClick={(): void => handleOpenModal(item)}>
                     <Image alt={item.name} layout="fill"
                            quality={100} src={item.image}/>
                  </div>
                  <Text color="white" component="p" style={{ textAlign: "center", marginTop: ".8rem" }}
                        variant="paragraph-lg">
                     {item.name}
                  </Text>
               </div>
            ))}

         </div>

         <div className={s.button} data-aos="fade-up">
            <form action="tel:+37126622113">
               <Button ariaLabel="contact-us" variant="primary">
                  Get Price Now
               </Button>
            </form>
         </div>

         {showModal && <ProductsModal data={data} handleCloseModal={handleCloseModal}/>}

      </>
   )
}