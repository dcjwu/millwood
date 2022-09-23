import React from "react"

import classNames from "classnames/bind"

import type { ButtonType } from "@customTypes/lib"

import s from "./Button.module.scss"

const cx = classNames.bind(s)

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(({
   variant,
   children,
   ariaLabel,
   loading,
   success,
   error,
   ...props
}, ref): JSX.Element => {

   const classNamesButton = cx(s.button, {
      [variant]: variant,
      loading: loading,
      success: success,
      error: error
   })

   return (
      <button ref={ref} aria-label={ariaLabel} {...props}
              className={classNamesButton}
              disabled={loading || !!success || !!error}>
         <span>

            {loading && "Processing"}
            {success && success}
            {error && error}

            {(!loading && !success && !error) && children}

         </span>

         {loading && <svg height="58" viewBox="0 0 58 58" width="58"
                          xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
               <g stroke="#FFF" strokeWidth="1.5" transform="translate(2 1)">
                  <circle cx="42.601" cy="11.462" fill="#fff"
                          fillOpacity="1" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="1;0;0;0;0;0;0;0"/>
                  </circle>
                  <circle cx="49.063" cy="27.063" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;1;0;0;0;0;0;0"/>
                  </circle>
                  <circle cx="42.601" cy="42.663" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;1;0;0;0;0;0"/>
                  </circle>
                  <circle cx="27" cy="49.125" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;1;0;0;0;0"/>
                  </circle>
                  <circle cx="11.399" cy="42.663" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;1;0;0;0"/>
                  </circle>
                  <circle cx="4.938" cy="27.063" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;0;1;0;0"/>
                  </circle>
                  <circle cx="11.399" cy="11.462" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;0;0;1;0"/>
                  </circle>
                  <circle cx="27" cy="5" fill="#fff"
                          fillOpacity="0" r="5">
                     <animate attributeName="fill-opacity"
                              begin="0s" calcMode="linear"
                              dur="1.3s" repeatCount="indefinite"
                              values="0;0;0;0;0;0;0;1"/>
                  </circle>
               </g>
            </g>
         </svg>}

         {success && <svg fill="none" height="25" viewBox="0 0 24 25"
                          width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.25 7.25L9.75 17.75L4.5 12.5" stroke="white" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
         </svg>}

      </button>
   )
})

Button.displayName = "Button"