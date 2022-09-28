import React from "react"

import Aos from "aos"

import { BlockProducts } from "@components/BlockProducts/BlockProducts"
import { Footer } from "@components/Footer/Footer"
import { Form } from "@components/Form/Form"
import { Header } from "@components/Header/Header"
import { Section } from "@lib/Section/Section"
import { Text } from "@lib/Text/Text"

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
            <Text color="white" component="p" data-aos="fade-up"
                  style={{ textAlign: "center" }}
                  variant="paragraph-lg">
               Our field of activity is eco-friendly and clean fuel production and distribution. SIA Millhouse Trade is
               the company incorporated in Latvia, having its representatives in Belgium and Ukraine, with partners
               across the Europe.
            </Text>
         </Section>

         <Section id="contact" subtitle="Contact us" title="Get in Touch">
            <Form/>
         </Section>

         <Footer/>
      </>
   )
}

export default Home
