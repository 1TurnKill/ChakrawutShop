import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import xml from '../assets/news.xml'
import Card from '../components/news/card'
import CardContainer from '../components/CardContainer'

export default () => {
    const ref_grid = useRef(document.createElement("div"))
    const [grid, setGrid] = useState(0)
    return (
        <>
            <Header />
            <div className="px-1">
                <CardContainer>
                    {xml["news"]["card"].map((element: any, i: number) => {
                        return <Card key={i + element} card={element} />
                    })}
                </CardContainer>
            </div>
            <Footer />
        </>
    )
}
