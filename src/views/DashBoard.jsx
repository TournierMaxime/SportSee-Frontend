import React from "react"

const DashBoard = () => {
    const username = 'Thomas'
    return (
        <div style={{position: 'absolute', top: '20%', left: '25%', display: 'flex', flexDirection: 'column'}}>
            <h1>Bonjour <span style={{ color: 'red' }}>{username}</span></h1>
            <p style={{margin: 0, padding: 0}}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default DashBoard