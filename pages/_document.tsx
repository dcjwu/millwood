import NextDocument, { Head, Html, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
   render(): JSX.Element {
      return (
         <Html lang="en">
            <Head>
               <link href="https://fonts.googleapis.com" rel="preconnect"/>
               <link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect"/>
               <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
                     rel="stylesheet"/>
               <meta content="Millwood is the company specialising in eco-friendly fuel production. We are Latvia-based company with
                  branches in Poland and Ukraine, producing top quality wood pellets and firewood. Millwood is your
                  reliable partner during cold European winters." name="description"/>

               <meta content="Millwood | Quality in Wood" property="og:title"/>
               <meta content="Millwood is the company specialising in eco-friendly fuel production. We are Latvia-based company with
                  branches in Poland and Ukraine, producing top quality wood pellets and firewood. Millwood is your
                  reliable partner during cold European winters." property="og:description"/>
               <meta content="https://millwood.lv/logo.png" property="og:image"/>
               <meta content="https://millwood.lv" property="og:url"/>

               <meta content="Millwood | Quality in Wood" name="twitter:title"/>
               <meta content="Millwood is the company specialising in eco-friendly fuel production. We are Latvia-based company with
                  branches in Poland and Ukraine, producing top quality wood pellets and firewood. Millwood is your
                  reliable partner during cold European winters." name="twitter:description"/>
               <meta content="https://millwood.lv/logo.png" name="twitter:url"/>
            </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>
         </Html>
      )
   }
}