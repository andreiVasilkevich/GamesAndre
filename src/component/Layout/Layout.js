import React from 'react'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import Routers from '../../router/routers.js'



const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export default Layout



