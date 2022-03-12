import { logo } from 'img/export'
import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from 'routes'
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
                    paths.map(path =>
                        <Link
                            key={ path.id }
                            to={ path.route }
                        >
                            <li
                                key={ path.id }
                                className="sideMenu__list-item"
                            >
                                <div className='sideMenu__list-item-inner'>
                                    <MenuBtn
                                        icon={ path.icon }
                                    />
                                </div>
                            </li>
                        </Link>
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