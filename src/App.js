import React from 'react'
import Favicon from 'react-favicon'
import './_styles.scss'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Benefits from './components/Benefits'
import Productivity from './components/Productivity'
import Quotes from './components/Quotes'
import FooterBox from './components/FooterBox'
import Footer from './components/Footer'

import fav from './images/favicon-32x32.png'

function App() {
    return (
        <>
        <Favicon url={fav} />
            <header>
                <Navbar />
                <Intro />
            </header>
            <main>
                
                <Benefits />
                <Productivity />
                <Quotes />
            </main>
            <footer>
                <FooterBox />
                <Footer />
            </footer>
        </>
    )
}

export default App