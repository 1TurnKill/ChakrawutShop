import React, { useState, ReactComponentElement } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        }, loop: true
    })
    return (
        <>
            <nav className="text-white">
                <div style={{ background: '#F88F01' }}>
                    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
                        <div>
                            <img src="/logo.png" width="325px" alt="" />
                        </div>
                    </div>
                </div>
                <div className="py-5" style={{ background: "#87431D" }}>
                    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center ">
                        <div className="text-lg flex">
                            <NavLink to="/" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>หน้าหลัก</NavLink>
                            <NavLink to="/about" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>เกี่ยวกับเรา</NavLink>
                            <NavLink to="/shop" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>สินค้า</NavLink>
                            <NavLink to="/news" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>ข่าวสาร</NavLink>
                            <NavLink to="/contract" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>ติดต่อเรา</NavLink>
                            <div className="px-3 hover:text-gray-300 transition duration-200">
                                <BiSearchAlt className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full">
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
                    <ArrowLeft onClick={(e:any) => e.stopPropagation() || slider.prev()} />
                    <ArrowRight onClick={(e:any) => e.stopPropagation() || slider.next()} />
                </div>
            </div>
            <div className="text-center"></div>
            <div className="container">
                <ul>
                    <a href=""><li><div className="title">1</div></li></a>
                    <a href=""><li><div className="title">2</div></li></a>
                    <a href=""><li><div className="title">3</div></li></a>
                    <a href=""><li><div className="title">4</div></li></a>
                    <a href=""><li><div className="title">5</div></li></a>
                    <a href=""><li><div className="title">6</div></li></a>
                    <a href=""><li><div className="title">7</div></li></a>
                    <a href=""><li><div className="title">8</div></li></a>
                    <a href=""><li><div className="title">9</div></li></a>
                    <a href=""><li><div className="title">10</div></li></a>
                    <a href=""><li><div className="title">11</div></li></a>
                    <a href=""><li><div className="title">12</div></li></a>
                </ul>
            </div>
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