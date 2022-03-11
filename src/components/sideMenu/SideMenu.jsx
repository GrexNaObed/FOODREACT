import { logo } from 'img/export'
import React from 'react'
import ExitSVG from 'svg/ExitSVG'
import MenuBtn from '../ui/menu/MenuBtn'
import { _menuListButtons, btnIcons } from '../ui/menu/menuBtns'

function SideMenu() {

    return (
        <div className='sideMenu'>
            <ul className="sideMenu__list">
                <li className="sideMenu__logo">
                    <img src={ logo } alt="" />
                </li>
                {
                    _menuListButtons.map(btn =>
                        <li
                            key={ btn.id }
                            className="sideMenu__list-item"
                        >
                            <div className='sideMenu__list-item-inner'>
                                <MenuBtn icon={ btnIcons[btn.icon] } />
                            </div>
                        </li>
                    )
                }
                <li>
                    <MenuBtn icon={ <ExitSVG /> } />
                </li>

            </ul>
        </div>
    )
}

export default SideMenu