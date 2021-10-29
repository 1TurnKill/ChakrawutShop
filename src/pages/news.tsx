import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { useKeenSlider } from "keen-slider/react"
import { FaFacebookF } from 'react-icons/fa'
import "keen-slider/keen-slider.min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import xml from '../assets/news.xml'
import Card from '../components/news/card'

export default () => {
    const ref_grid = useRef(document.createElement("div"))
    const [grid, setGrid] = useState(0)
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        }, loop: true
    })
    useEffect(() => {
        function resize() {
            const w = ref_grid.current.getBoundingClientRect().width
            const z = Math.round(((4 / 1280) * w))
            setGrid((z < 2) ? 2 : z)
        }
        resize()
        window.onresize = resize
    }, [])
    const news = () => {
        let content = []
        for (let i = 0; i < xml["news"]["card"].length; i++) {
            const element = xml["news"]["card"][i]
            content.push(<Card card={element} />)
        }
        return (content)
    }
    return (
        <>
            <Header />
            <div ref={ref_grid} className="container max-w-7xl mx-auto my-10">
                <ul style={{ gridTemplateColumns: `repeat(${grid},minmax(0,1fr))` }} className="grid gap-6 pb-24 mx-14">
                    {news()}
                </ul>
            </div>
            <Footer />
        </>
    )
}
