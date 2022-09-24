import React from "react"

import Image from "next/image"

import birchlogs from "@assets/images/birchlogs.jpg"
import woodpellets from "@assets/images/woodpellets.jpg"
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nisl sed nisl aliquam dapibus id in lectus. Vivamus ultricies tristique mi nec iaculis. Aliquam sollicitudin arcu ac eleifend semper. Proin tempor tellus a orci pellentesque convallis at quis lectus. In iaculis ut ipsum nec vehicula. Etiam et efficitur massa. Duis in lobortis augue, nec posuere lacus. Morbi in vulputate leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: woodpellets
   },
   {
      name: "Birch Logs",
      description: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nisl sed nisl aliquam" +
         " dapibus id in lectus. Vivamus ultricies tristique mi nec iaculis. Aliquam sollicitudin arcu ac eleifend semper. Proin tempor tellus a orci pellentesque convallis at quis lectus. In iaculis ut ipsum nec vehicula. Etiam et efficitur massa. Duis in lobortis augue, nec posuere lacus. Morbi in vulputate leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: birchlogs
   },
   {
      name: "Wood Pellets 3",
      description: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nisl sed nisl aliquam" +
         " dapibus id in lectus. Vivamus ultricies tristique mi nec iaculis. Aliquam sollicitudin arcu ac eleifend semper. Proin tempor tellus a orci pellentesque convallis at quis lectus. In iaculis ut ipsum nec vehicula. Etiam et efficitur massa. Duis in lobortis augue, nec posuere lacus. Morbi in vulputate leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: woodpellets
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
         <div className={s.wrapper}>

            {products.map((item, index) => (
               <div key={item.name} className={s.item} data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}>
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
            <form action="tel:+37122012202">
               <Button ariaLabel="contact-us" variant="primary">
                  Get Price Now
               </Button>
            </form>
         </div>

         {showModal && <ProductsModal data={data} handleCloseModal={handleCloseModal}/>}

      </>
   )
}