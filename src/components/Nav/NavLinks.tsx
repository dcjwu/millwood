import React from "react"

import { useRecoilState } from "recoil"

import { isNavVisibleState } from "@atoms/isNavVisibleState.atom"
import s from "@components/Nav/Nav.module.scss"
import { dbLinks } from "@db/links"
import { useDesignHover } from "@hooks/useDesignHover"
import { Text } from "@lib/Text/Text"

export const NavLinks: React.FC = (): JSX.Element => {

   const [, setIsNavVisible] = useRecoilState(isNavVisibleState)

   const [hasMounted, activeField, wasElementHovered, handleMouseEnter, handleMouseLeave] = useDesignHover()

   return (
      <nav className={s.links} role="presentation" onMouseLeave={handleMouseLeave}>
         
         {hasMounted && dbLinks.map(item => (
            <a key={item} className={item !== activeField && wasElementHovered ? s.notHover : ""}
                  href={`#${item.replace(" ", "")}`}
                  onBlur={handleMouseLeave} onClick={(): void => setIsNavVisible(prevState => !prevState)}
                  onFocus={(): void => handleMouseEnter(item)} onMouseEnter={(): void => handleMouseEnter(item)}>
               <Text color="brand-v1" component="p"
                        variant="paragraph">
                  {item}
               </Text>
            </a>
         ))}

      </nav>
   )
}