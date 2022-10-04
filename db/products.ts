
import birch from "@assets/images/birchlogs.jpg"
import other from "@assets/images/other.jpg"
import pellets from "@assets/images/woodpellets.jpg"

import type { StaticImageData } from "next/image"

export type DbProductsType = {
   title: string
   description: string
   image: StaticImageData
}

export const dbProducts: DbProductsType[] = [
   {
      title: "Wood Pellets",
      description: "We produce and distribute class A1 and ST1, 6mm pellets made from spruce and pine wood.",
      image: pellets
   },
   {
      title: "Birch Firewood",
      description: "We distribute kiln dried birch firewood in 20 L and 40 L bags. Size: 25-30 cm (as per request), Moisture: up to 18%.",
      image: birch
   },
   {
      title: "Other Wood Products",
      description: "We offer different product made from pine-tree, spruce, cedar and larch as per your request.",
      image: other
   }
]