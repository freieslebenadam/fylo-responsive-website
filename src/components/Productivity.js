import React from 'react'
import '../style/Productivity.scss'
import illustrationProductivity from '../images/illustration-stay-productive.png'
import arrowIcon from '../images/icon-arrow.svg'

function Productivity() {
    return (
        <article>
            <div className="container1">
                <section className="productivity">
                    <div className="productivity-picture">
                        <img src={illustrationProductivity} alt="Picture not found" />
                    </div>
                    <div className="productivity-text">
                        <h1>Stay productive, wherever you are</h1>
                        <p>
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                        </p>
                        <p>
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                        </p>
                        <a>See how Fylo works <img src={arrowIcon} alt="Picture not found" /></a>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Productivity