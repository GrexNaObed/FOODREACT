import BellSVG from "svg/BellSVG"
import DashBoardSVG from "svg/DashBoardSVG"
import DiscountSVG from "svg/DiscountSVG"
import HomeSVG from "svg/HomeSVG"
import SettingsSVG from "svg/SettingsSVG"
import SMSSVG from "svg/SMSSVG"

export const HOME = 'home'
export const DISCOUNT = 'discount'
export const DASHBOARD = 'dashboard'
export const SMS = 'sms'
export const BELL = 'bell'
export const SETTINGS = 'settings'


export const btnIcons = {
    [HOME]: <HomeSVG />,
    [DISCOUNT]: <DiscountSVG />,
    [DASHBOARD]: <DashBoardSVG />,
    [SMS]: <SMSSVG />,
    [BELL]: <BellSVG />,
    [SETTINGS]: <SettingsSVG />,
}

class MenuListBtns {
    constructor(btns) {
        return  btns.map((btn, index) => ({ id: index, icon: btn }))
    }
}

export const _menuListButtons = new MenuListBtns(Object.keys(btnIcons))