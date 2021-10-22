import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { useKeenSlider } from "keen-slider/react"
import { FaFacebookF } from 'react-icons/fa'
import "keen-slider/keen-slider.min.css"
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            {/* <div className="w-full">
                <div className="block relative">
                    <div ref={sliderRef} data-slide={currentSlide} className="keen-slider w-full h-96">
                        <div className="keen-slider__slide">
                            <img src="/shop_hero1.png" alt="" />
                        </div>
                        <div className="keen-slider__slide">
                            <img src="/shop_hero2.png" alt="" />
                        </div>
                        <div className="keen-slider__slide">
                            <img src="/shop_hero3.png" alt="" />
                        </div>
                        <div className="keen-slider__slide">
                            <img src="/shop_hero4.png" alt="" />
                        </div>
                    </div>
                    <ArrowLeft onClick={(e: any) => e.stopPropagation() || slider.prev()} />
                    <ArrowRight onClick={(e: any) => e.stopPropagation() || slider.next()} />
                </div>
            </div> */}
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

function ArrowLeft(props: any) {
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--left"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    )
}

function ArrowRight(props: any) {
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    )
}