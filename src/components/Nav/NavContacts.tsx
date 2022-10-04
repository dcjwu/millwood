import React from "react"

import s from "@components/Nav/Nav.module.scss"
import { dbContactsMillwood } from "@db/contacts"
import { useDesignHover } from "@hooks/useDesignHover"
import { Text } from "@lib/Text/Text"

export const NavContacts: React.FC = (): JSX.Element => {

   const [hasMounted, activeField, wasElementHovered, handleMouseEnter, handleMouseLeave] = useDesignHover()

   return (
      <div className={s.contacts} role="presentation" onMouseLeave={handleMouseLeave}>

         {hasMounted && <>
            <a className={`${s.item} ${"tel" !== activeField && wasElementHovered ? s.notHover : ""}`}
               href={`tel:${dbContactsMillwood.phone}`} onBlur={handleMouseLeave}
               onFocus={(): void => handleMouseEnter("tel")} onMouseEnter={(): void => handleMouseEnter("tel")}>
               <svg fill="none" height="24" viewBox="0 0 24 24"
                    width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.67187 11.7C9.44364 13.2937 10.7324 14.5792 12.3281 15.3468C12.4458 15.4026 12.576 15.4267 12.7059 15.4168C12.8358 15.407 12.9608 15.3635 13.0687 15.2906L15.4125 13.725C15.516 13.6547 15.6357 13.6119 15.7603 13.6004C15.8849 13.5889 16.0104 13.6092 16.125 13.6593L20.5125 15.5437C20.6625 15.6061 20.7877 15.7161 20.869 15.8567C20.9504 15.9973 20.9832 16.1607 20.9625 16.3218C20.8234 17.4072 20.2937 18.4047 19.4723 19.1278C18.6509 19.8508 17.5943 20.2497 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75025 6.40572 4.1492 5.34905 4.87221 4.52768C5.59522 3.70631 6.59274 3.17653 7.67812 3.03747C7.83922 3.01678 8.00266 3.04961 8.14326 3.13093C8.28386 3.21224 8.39384 3.33752 8.45625 3.48747L10.3406 7.88434C10.3896 7.99717 10.4101 8.12032 10.4003 8.24293C10.3905 8.36555 10.3507 8.48387 10.2844 8.58747L8.71875 10.9687C8.64905 11.0764 8.60814 11.2002 8.59993 11.3282C8.59172 11.4563 8.61649 11.5842 8.67187 11.7V11.7Z"
                     stroke="#C5A47E" strokeLinecap="round"
                     strokeLinejoin="round" strokeWidth="1.5"/>
                  <path d="M15.75 4.5H19.5V8.25" stroke="#C5A47E" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5"/>
                  <path d="M15 9L19.5 4.5" stroke="#C5A47E" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5"/>
               </svg>
               <Text color="brand-v1" component="span"
                     variant="paragraph">
                  {dbContactsMillwood.phone}
               </Text>
            </a>

            <a className={`${s.item} ${"mail" !== activeField && wasElementHovered ? s.notHover : ""}`}
               href={`mailto:${dbContactsMillwood.email}`} onBlur={handleMouseLeave}
               onFocus={(): void => handleMouseEnter("mail")} onMouseEnter={(): void => handleMouseEnter("mail")}>
               <svg fill="none" height="24" viewBox="0 0 24 24"
                    width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                     stroke="#C5A47E" strokeLinecap="round"
                     strokeLinejoin="round" strokeWidth="1.5"/>
                  <path d="M21 5.25L12 13.5L3 5.25" stroke="#C5A47E" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5"/>
               </svg>
               <Text color="brand-v1" component="span"
                     variant="paragraph">
                  {dbContactsMillwood.email}
               </Text>
            </a>

            <a className={`${s.item} ${"address" !== activeField && wasElementHovered ? s.notHover : ""}`}
               href="https://goo.gl/maps/anDWa7vbvP4YSw8b6" rel="noreferrer"
               target="_blank" onBlur={handleMouseLeave}
               onFocus={(): void => handleMouseEnter("address")} onMouseEnter={(): void => handleMouseEnter("address")}>
               <svg fill="none" height="20" viewBox="0 0 20 20"
                    width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.91895 4.98407C9.42449 4.98407 8.94114 5.13069 8.53002 5.4054C8.1189 5.6801 7.79847 6.07055 7.60925 6.52736C7.42003 6.98418 7.37052 7.48684 7.46698 7.9718C7.56345 8.45675 7.80155 8.90221 8.15118 9.25184C8.50081 9.60147 8.94627 9.83957 9.43122 9.93603C9.91617 10.0325 10.4188 9.98299 10.8757 9.79377C11.3325 9.60455 11.7229 9.28412 11.9976 8.873C12.2723 8.46187 12.4189 7.97852 12.4189 7.48407C12.4182 6.82126 12.1546 6.18581 11.6859 5.71714C11.2172 5.24846 10.5818 4.98482 9.91895 4.98407ZM9.91895 8.73407C9.67172 8.73407 9.43004 8.66076 9.22448 8.52341C9.01892 8.38605 8.85871 8.19083 8.7641 7.96242C8.66949 7.73402 8.64473 7.48268 8.69296 7.24021C8.7412 6.99773 8.86025 6.775 9.03506 6.60019C9.20988 6.42537 9.43261 6.30632 9.67508 6.25809C9.91756 6.20986 10.1689 6.23461 10.3973 6.32922C10.6257 6.42383 10.8209 6.58405 10.9583 6.78961C11.0956 6.99517 11.1689 7.23684 11.1689 7.48407C11.1686 7.81547 11.0367 8.13319 10.8024 8.36753C10.5681 8.60187 10.2503 8.73369 9.91895 8.73407Z"
                     fill="#C5A47E"/>
                  <path d="M14.7229 2.6764C13.5351 1.48891 11.9496 0.7835 10.2723 0.696302C8.59499 0.609105 6.94484 1.1463 5.64032 2.20422C4.33581 3.26214 3.4694 4.76577 3.20833 6.42493C2.94726 8.08408 3.31002 9.78113 4.2266 11.1885L8.94953 18.4391C9.05464 18.6004 9.19834 18.7329 9.36763 18.8247C9.53691 18.9165 9.72642 18.9645 9.91897 18.9645C10.1115 18.9645 10.301 18.9165 10.4703 18.8247C10.6396 18.7329 10.7833 18.6004 10.8884 18.4391L15.6115 11.1885C16.462 9.88296 16.8378 8.32471 16.6761 6.77497C16.5143 5.22523 15.8247 3.77819 14.7229 2.6764ZM14.5641 10.5062L9.91899 17.6371L5.27379 10.5062C3.85192 8.32347 4.15688 5.40237 5.99891 3.56026C6.5137 3.04546 7.12484 2.6371 7.79745 2.35849C8.47006 2.07988 9.19096 1.93648 9.91899 1.93648C10.647 1.93648 11.3679 2.07988 12.0405 2.35849C12.7131 2.6371 13.3243 3.04546 13.8391 3.56026C15.6811 5.40237 15.986 8.32347 14.5641 10.5062Z"
                     fill="#C5A47E"/>
               </svg>
               <Text color="brand-v1" component="p" style={{ whiteSpace: "pre-wrap" }}
                     variant="paragraph">
                  {dbContactsMillwood.address}
               </Text>
            </a>
         </>}

      </div>
   )
}