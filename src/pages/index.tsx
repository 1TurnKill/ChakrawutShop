import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import Header from '../components/Header';
import Footer from '../components/Footer';
import xml from '../assets/catalog.xml'
import xml2 from '../assets/product.xml'
import Catalog from '../components/Catalog'
import CardContainer from '../components/CardContainer'
import ProductCard from '../components/ProductCard'
import AutoplaySlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';
import 'react-awesome-slider/dist/styles.css';
import style from '../assets/slide.module.scss'

const slider = (
    <AutoplaySlider className="w-full" style={{maxHeight:"567px",height:"500px"}} cssModule={style} bullets={false}>
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
    </AutoplaySlider>
)

export default () => {
    const ref_grid = useRef(document.createElement("div"))
    const [grid, setGrid] = useState(0)
    return (
        <>
            <Header />
            <div className="relative">
                {slider}
            </div>
            <div>
                <div className="text-center text-3xl text-gray-700 mt-9">ประเภทสินค้า</div>
                <CardContainer>
                    {xml["catalog"]["card"].map((element: any, i: number) => {
                        return (
                            <Catalog key={i + element} card={element} />
                        )
                    })}
                </CardContainer>
            </div>
            <div>
                <div className="text-center text-3xl text-gray-700 mt-9">สินค้าแนะนำ</div>
                <div className="px-1">
                    <CardContainer size={6}>
                        {xml2["products"]["item"].map((element: any, i: number) => {
                            return (
                                <ProductCard key={i + element} card={element} />
                            )
                        })}
                    </CardContainer>
                </div>
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