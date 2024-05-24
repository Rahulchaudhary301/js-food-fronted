import React from 'react'
import HeroPage from './HeroPage'
import Enquary from './Enquary'
import AboutSection from './AboutSection'
import SocialResponsibility from './SocialResponsibility'
import Products from './Products'

export default function HomeMain() {
    return (
        <div>
            <HeroPage/>
            <AboutSection/>
            <Products/>
            <SocialResponsibility/>
            <Enquary/>
        </div>
    )
}
