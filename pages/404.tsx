import { NextPage } from "next"
import { useRouter } from "next/router"

import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"

const Custom404: NextPage = (): JSX.Element => {
   
   const router = useRouter()
   
   return (
      <div className="error">
         <Heading color="brand-v1" component="p" variant="h1">
            PAGE NOT FOUND
         </Heading>
         
         <Button ariaLabel="go-back" variant="primary" onClick={(): Promise<boolean> => router.push("/")}>
            Return back
         </Button>
      </div>
   )
}

export default Custom404