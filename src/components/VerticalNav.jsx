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
        <nav style={{display: 'flex', alignItems: 'center', backgroundColor: '#000', padding: '2em', width: '8em', height: '80vh', position: 'relative'}}>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column' }}>
                {navItems.map((item, idx) => {
                    return (
                        <li key={idx} style={{margin: '1em 0'}}><img src={item.logo} alt={item.name} /></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default VerticalNav