import React from 'react'
import '../style/Button.scss'

function Button({type, href, children}) {
    let btnElement
    if (type === "link") {
        btnElement = (
            <a href={href}>
                {children}
            </a>
        )
    } else {
        btnElement = (
            <button>
                {children}
            </button>
        )
    }

    return (
        <div className="button">
            {btnElement}
        </div>
    )
}

Button.defaultProps = {
    type: "button",
    href: "#"
}

export default Button