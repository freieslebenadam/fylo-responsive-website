import React from 'react'

function Quote({name, position, pic, children}) {
    return (
        <div className="quote">
            <p>
                {children}
            </p>
            <div className="quote-person">
                <div className="quote-person-pic">
                    <img src={pic} alt="Picture not found" />
                </div>
                <div className="quote-person-info">
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

Quote.defaultProps = {
    name: "John Doe",
    position: "CEO",
    pic: "",
    children: <p></p>
}

export default Quote