import React from "react"
import yoga from '../assets/icons/yoga.png'
import swim from '../assets/icons/swim.png'
import ride from '../assets/icons/ride.png'
import gym from '../assets/icons/gym.png'

const VerticalNav = () => {
    const navItems = [
        {
            name: "yoga",
            logo: yoga
        },
        {
            name: "swim",
            logo: swim
        },
        {
            name: "ride",
            logo: ride
        },
        {
            name: "gym",
            logo: gym
        }
    ]
    return (
        <nav className="verticalNav">
            <ul className="verticalNav__ul">
                {navItems.map((item, idx) => {
                    return (
                        <li key={idx} className="verticalNav__ul--li"><img src={item.logo} alt={item.name} /></li>
                    )
                })}
            </ul>
            <p className="copyright">Copyright, SportSee 2020</p>
        </nav>
    )
}

export default VerticalNav