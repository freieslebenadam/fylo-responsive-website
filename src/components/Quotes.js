import React from 'react'
import '../style/Quotes.scss'
import Quote from './Quote'

import profile1 from '../images/profile-1.jpg'
import profile2 from '../images/profile-2.jpg'
import profile3 from '../images/profile-3.jpg'
import quotesPic from '../images/bg-quotes.png'

function Quotes() {
    return (
        <article>
            <div className="container1">
                <section className="quotes">
                    <div className="quotes-pic">
                        <img src={quotesPic} alt="Picture not found" />
                    </div>
                    <Quote name="Satish Patel" position="Founder & CEO, Huddle" pic={profile1}>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                    </Quote>
                    <Quote name="Bruce McKenzie" position="Founder & CEO, Huddle" pic={profile2}>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                    </Quote>
                    <Quote name="Iva Boyd" position="Founder & CEO, Huddle" pic={profile3}>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                    </Quote>
                </section>
            </div>
        </article>
    )
}

export default Quotes