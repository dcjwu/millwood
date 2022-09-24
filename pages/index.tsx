import { Footer } from "@components/Footer/Footer"
import { Header } from "@components/Header/Header"
import { Section } from "@lib/Section/Section"

import type { NextPage } from "next"


const Home: NextPage = () => {
   return (
      <>
         <Header/>

         <Section subtitle="What we offer" title="Products">
            CONTENT
         </Section>

         <Section isBrandBackGround subtitle="Who we are" title="About">
            CONTENT
         </Section>

         <Section subtitle="Contact us" title="Get in Touch">
            CONTENT
         </Section>
         
         <Footer/>
      </>
   )
}

export default Home
