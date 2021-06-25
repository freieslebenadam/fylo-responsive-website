import React from 'react'
import '../style/Benefits.scss'
import Benefit from './Benefit'

import accessAnywhere from '../images/icon-access-anywhere.svg'
import anyFile from '../images/icon-any-file.svg'
import security from '../images/icon-security.svg'
import collaboration from '../images/icon-collaboration.svg'

function Benefits() {
    return (
        <article>
            <div className="container2">
                <section className="benefits">
                    <Benefit icon={accessAnywhere}>
                        <h2>Access your files, anywhere</h2>
                        <p>The ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere.</p>
                    </Benefit>
                    <Benefit icon={security}>
                        <h2>Security you can trust</h2>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </Benefit>
                    <Benefit icon={collaboration}>
                        <h2>Real-time collaboration</h2>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </Benefit>
                    <Benefit icon={anyFile}>
                        <h2>Store any type of file</h2>
                        <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </Benefit>
                </section>
            </div>
        </article>
    )
}

export default Benefits