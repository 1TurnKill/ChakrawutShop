import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { useKeenSlider } from "keen-slider/react"
import { FaFacebookF } from 'react-icons/fa'
import "keen-slider/keen-slider.min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

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
            const z = Math.round(((12 / 2304) * (w - ((w > 768) ? 276 : 0))))
            setGrid((z < 2) ? 2 : z)
        }
        resize()
        window.onresize = resize
    }, [])
    return (
        <>
            <Header />
            <div className="text-center"></div>
            <div ref={ref_grid} className="container max-w-7xl mx-auto">
                <ul style={{ gridTemplateColumns: `repeat(${grid},minmax(0,1fr))` }} className="grid gap-6 pb-24">
                    <div>
                        <a href=""><li><div className="title">1</div></li></a>
                    </div>
                    <div>
                        <a href=""><li><div className="title">1</div></li></a>
                    </div>
                    <div>
                        <a href=""><li><div className="title">1</div></li></a>
                    </div>
                    <div>
                        <a href=""><li><div className="title">1</div></li></a>
                    </div>
                    <div>
                        <a href=""><li><div className="title">1</div></li></a>
                    </div>
                    <div>
                        <a href=""><li><div className="title">1</div></li></a>
                    </div>
                    <div>
                        <a href=""><li><div className="title">1</div></li></a>
                    </div>
                </ul>
            </div>
            <Footer />
        </>
    )
}
