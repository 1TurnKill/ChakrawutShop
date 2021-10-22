import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { useKeenSlider } from "keen-slider/react"
import { FaFacebookF } from 'react-icons/fa'
import "keen-slider/keen-slider.min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => {
    return (
        <>
            <Header />
            
            <div>
                <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.2870828717816!2d100.72378755872191!3d13.804525100000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d646f13edd06b%3A0xeca9e0d8b0169e8!2z4Lij4LmJ4Liy4LiZIOC4qi7guIjguLHguIHguKPguLLguKfguLjguJg!5e0!3m2!1sen!2sth!4v1634921051247!5m2!1sen!2sth" 
                width="600" height="450" loading="lazy" frameBorder="0" ></iframe><br/><br/> 
            </div>

            <div>
                เกี่ยวกับเรา
                <br/>
                ร้าน ส.จักราวุธ ยินดีต้อนรับค่ะ<br/>
                -จำหน่ายจักรเย็บผ้า อะไหล่จักร อุปกรณ์ตัดเย็บ เเละสินค้าอย่างอื่นอีกมากมาย<br/> 
                -สินค้าทุกรายการมีสต๊อคพร้อมส่ง จัดส่งทุกวัน<br/> 
                -ทางร้านเรามีบริการลับกรรไกร-มีด สามารถนำมาที่ร้านได้เลยค่ะ<br/>
                -หากสินค้าหรือบริการมีปัญหา สามารถทักแชทมาได้เลยค่ะ<br/><br/>
                
                ที่อยู่ร้าน<br/>
                : 99-99/1 ซอย 203/1 ถนน รามคำเเหง แขวง มีนบุรี เขต มีนบุรี กรุงเทพ 10510<br/>
                *** ร้านค้าอยู่ติดถนนใหญ่ ก่อนถึงโลตัสกับบิ๊กซีค่ะ *** <br/><br/>  
            </div>
            
            <div>
                Line
                <br/>
                <img src="Line_Ya.jpg" sizes="(max-width: 479px) 92vw, 99px" width="300" alt="" className="footer-image" /><br/>
                ID line : 0894586469<br/><br/> 
            </div>

            <div>
                Facebook
                <br/>
                Page : ส.จักราวุธ จักรเย็บผ้า อะไหล่จักร<br/>
                Link : <a href ="shorturl.at/wxDIY">Facebook ส.จักราวุธ</a><br/><br/> 
            </div>

            <div>
                Shopee
                <br/>
                Shop : ChakrawutShop<br/>
                Link : <a href ="https://shopee.co.th/chakrawutshop">Shopee ChakrawutShop</a><br/><br/> 
            </div>

            <div>
                Phone
                <br/>
                Phone : 091-941-4289<br/><br/> 
            </div>

            <div>
                Email
                <br/>
                Email : khunya992031@gmail.com<br/><br/> 
            </div>

            <Footer />

        </>
    )
}
