import React from "react"

import Aos from "aos"

import { BlockProducts } from "@components/BlockProducts/BlockProducts"
import { Footer } from "@components/Footer/Footer"
import { Header } from "@components/Header/Header"
import { Section } from "@lib/Section/Section"

import type { NextPage } from "next"

const Home: NextPage = () => {

   React.useEffect(() => {
      Aos.init({
         easing: "ease-in-out",
         once: true,
         offset: 120,
         delay: 100,
         mirror: true
      })
   }, [])

   return (
      <>
         <Header/>

         <Section id="products" subtitle="What we offer" title="Products">
            <BlockProducts/>
         </Section>

         <Section isBrandBackGround id="about" subtitle="Who we are"
                  title="About">
            CONTENT
         </Section>

         <Section id="contact" subtitle="Contact us" title="Get in Touch">
            CONTENT
         </Section>

         <Footer/>
      </>
   )
}

export default Home
