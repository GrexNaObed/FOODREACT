import { useHover } from 'hooks/useHover'
import React from 'react'

// get styles from common scss

function MenuBtn({ icon }) {
    // const { hoverOnElement, hoverLeaveFromElement } = useHover('active')
    return (
        <button
            className='menu-btn'
            // onMouseEnter={ hoverOnElement }
            // onMouseLeave={ hoverLeaveFromElement }
        >
            {
                icon
            }
        </button>
    )
}

export default MenuBtn