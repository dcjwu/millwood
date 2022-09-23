import React from "react"

export const useIsElementOnScreen = (initialState: boolean, ref: React.RefObject<HTMLDivElement>, rootMargin?: string): boolean => {

   const [isIntersecting, setIntersecting] = React.useState(initialState)

   React.useEffect(() => {

      const element = ref.current

      const observer = new IntersectionObserver(
         ([entry]) => {
            // Update our state when observer callback fires
            setIntersecting(entry.isIntersecting)
         },
         { rootMargin }
      )
      element && observer.observe(element)
      return () => {
         element && observer.unobserve(element)
      }
   }, [ref, rootMargin])

   return isIntersecting
}