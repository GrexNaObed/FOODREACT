import { logo } from 'img/export'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { paths } from 'routes'
import ExitSVG from 'svg/ExitSVG'
import MenuBtn from '../ui/menu/MenuBtn'
import { _menuListButtons, btnIcons } from '../ui/menu/menuBtns'

function SideMenu() {

    const menuRef = useRef()

    const clickOnMenuItem = (item) => {
        if (item.target.classList.contains('sideMenu__list-item')) {
            menuRef.current.querySelectorAll('.sideMenu__list-item')
                .forEach(_menuItem => _menuItem.classList.remove('active'))
                
            !item.target.classList.contains('active')
                ? item.target.classList.add('active')
                : item.target.classList.remove('active')
        }
    }

    return (
        <div className='sideMenu'>
            <ul
                className="sideMenu__list"
                onClick={ clickOnMenuItem }
                ref={ menuRef }
            >
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
                                className={ `sideMenu__list-item ${path.status}` }
                            // onClick={ clickOnMenuItem(path.id) }
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