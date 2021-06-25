import React from 'react'

function Benefit({icon, children}) {
    return (
        <div className="benefit">
            <img src={icon} alt="Picture not found" />
            {children}
        </div>
    )
}

export default Benefit