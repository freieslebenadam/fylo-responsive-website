import React, {useState} from 'react'
import '../style/FooterBox.scss'
import Button from './Button'

function FooterBox() {
    const emailRE = /^[A-Za-z0-9]+(\.[A-Za-z0-9]*)?@[a-z]*\.[a-z0-9]{2,3}$/
    const [email, setEmail] = useState("")
    let valid = emailRE.test(email)
    const validString = valid ? "" : "Please enter a valid email address."

    return (
        <div className="container2">
            <div className="footer-box">
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form className="footer-box-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>
                        <span style={{opacity: 0}}>|</span>{validString}
                    </label>
                    <Button type="button">
                        Get Started For Free
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default FooterBox