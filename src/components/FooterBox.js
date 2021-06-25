import React from 'react'
import '../style/FooterBox.scss'
import Button from './Button'

function FooterBox() {
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
                    />
                    <Button>
                        Get Started For Free
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default FooterBox