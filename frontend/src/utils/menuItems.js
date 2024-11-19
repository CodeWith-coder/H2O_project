import {  dashboard, bullseye, faucet_drop, flowevent } from '../utils/icons'

export const menuItems = [
    {
        id: 1, 
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Flow Event",
        icon: flowevent,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Goal",
        icon: bullseye,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "WaterUsage",
        icon: faucet_drop,
        link: "/dashboard",
    },
]