import React, { useCallback } from "react"

type UseDesignHoverType = [
   boolean,
   (string | null),
   boolean,
   ((id: string) => void),
   (() => void)
]

export const useDesignHover = (): UseDesignHoverType => {

   const [hasMounted, setHasMounted] = React.useState<boolean>(false)
   const [activeField, setActiveField] = React.useState<string | null>(null)
   const [wasElementHovered, setWasElementHovered] = React.useState<boolean>(false)

   const handleMouseEnter = useCallback((id: string): void => {
      if (!wasElementHovered) {
         setWasElementHovered(true)
      }
      setActiveField(id)
   }, [wasElementHovered])

   const handleMouseLeave = useCallback((): void => {
      setWasElementHovered(false)
      setActiveField(null)
   }, [])

   React.useEffect(() => {
      setHasMounted(true)
   }, [])

   return [hasMounted, activeField, wasElementHovered, handleMouseEnter, handleMouseLeave]
}