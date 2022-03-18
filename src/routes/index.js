// import Home from "components/pages/home/Home";
import React from "react";
import BellSVG from "svg/BellSVG";
import DashBoardSVG from "svg/DashBoardSVG";
import DiscountSVG from "svg/DiscountSVG";
import HomeSVG from "svg/HomeSVG";
import SettingsSVG from "svg/SettingsSVG";
import SMSSVG from "svg/SMSSVG";


export const HOME = ''
export const DISCOUNT = 'DISCOUNT'
export const DASHBOARD = 'DASHBOARD'
export const SMS = 'SMS'
export const BELL = 'BELL'
export const SETTINGS = 'SETTINGS'



const strToLowerCase = (str) => `/${str.toLowerCase()}`

const LazyHome = React.lazy(() => import('components/pages/home/Home'))
const LazyDashboard = React.lazy(() => import('components/pages/dashboard/Dashboard'))


export const paths = [
    { id: 0, icon: <HomeSVG />, route: strToLowerCase(HOME), component: <LazyHome />, status: 'active' },
    { id: 1, icon: <DiscountSVG />, route: strToLowerCase(DISCOUNT), component: DISCOUNT, status: 'disable' },
    { id: 2, icon: <DashBoardSVG />, route: strToLowerCase(DASHBOARD), component: <LazyDashboard />, status: 'disable' },
    { id: 3, icon: <SMSSVG />, route: strToLowerCase(SMS), component: SMS, status: 'disable' },
    { id: 4, icon: <BellSVG />, route: strToLowerCase(BELL), component: BELL, status: 'disable' },
    { id: 5, icon: <SettingsSVG />, route: strToLowerCase(SETTINGS), component: SETTINGS, status: 'disable' },
]