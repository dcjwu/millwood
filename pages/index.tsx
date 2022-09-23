import { Heading } from "@lib/Heading/Heading"
import { Section } from "@lib/Section/Section"
import { Text } from "@lib/Text/Text"

import type { NextPage } from "next"


const Home: NextPage = () => {
   return (
      <>
         <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: "3.6rem"
         }}>
            <Heading color="brand" component="p" variant="display">
               Millwood.lv
            </Heading>
            <Text isBold color="brand" component="p"
                  variant="paragraph-lg">
               Millwood.lv
            </Text>
         </div>

         <Section subtitle="What we do" title="Products">
            lsakdjf;lsakdj l;fkjs;lkfjs;l
         </Section>
      </>
   )
}

export default Home
