import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import xml from '../assets/catalog.xml'
import xml2 from '../assets/product.xml'
import Catalog from '../components/Catalog'
import CardContainer from '../components/CardContainer'
import ProductCard from '../components/ProductCard'
import AutoplaySlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';
import 'react-awesome-slider/dist/styles.css';
import '../assets/slide.scss'

const slider = (
    <AutoplaySlider className="w-full" style={{maxHeight:"567px",height:"500px"}} bullets={false}>
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
        <div data-src="/shop_hero2.png" />
    </AutoplaySlider>
)

export default () => {
    return (
        <>
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
                        {xml2["products"]["item"].slice(0,6).map((element: any, i: number) => {
                            return (
                                <ProductCard key={i + element} card={element} reccommend={true} />
                            )
                        })}
                    </CardContainer>
                </div>
            </div>
        </>
    )
}