import { useRef, useState } from "react"

export const useHover = (init) => {
    const hoverOnElement = (e) => e.target.classList.add(init)
    const hoverLeaveFromElement = (e) => e.target.classList.remove(init)
    return { hoverOnElement,hoverLeaveFromElement }
}