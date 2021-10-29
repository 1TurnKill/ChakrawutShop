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
            <div className="w-full flex justify-center items-center mt-12">
                <div className="lg:flex">
                    <div className="w-full flex justify-center">
                        <iframe className="max-w-lg w-full" style={{ maxHeight: "512px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.2870828717816!2d100.72378755872191!3d13.804525100000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d646f13edd06b%3A0xeca9e0d8b0169e8!2z4Lij4LmJ4Liy4LiZIOC4qi7guIjguLHguIHguKPguLLguKfguLjguJg!5e0!3m2!1sen!2sth!4v1634921051247!5m2!1sen!2sth" loading="lazy" frameBorder="0" ></iframe>
                    </div>
                    <div className="my-10 ml-14 text-gray-600">
                        <div>
                            <div>
                                <div className="text-4xl text-gray-800">เกี่ยวกับเรา</div>
                                <p>ร้าน ส.จักราวุธ ยินดีต้อนรับค่ะ</p>
                                <p>-จำหน่ายจักรเย็บผ้า อะไหล่จักร อุปกรณ์ตัดเย็บ เเละสินค้าอย่างอื่นอีกมากมาย</p>
                                <p>-สินค้าทุกรายการมีสต๊อคพร้อมส่ง จัดส่งทุกวัน</p>
                                <p>-ทางร้านเรามีบริการลับกรรไกร-มีด สามารถนำมาที่ร้านได้เลยค่ะ</p>
                                <p>-หากสินค้าหรือบริการมีปัญหา สามารถทักแชทมาได้เลยค่ะ</p>
                            </div>
                            <div className="mt-5">
                                <div className="text-2xl text-gray-800">ที่อยู่ร้าน</div>
                                <p>: 99-99/1 ซอย 203/1 ถนน รามคำเเหง แขวง มีนบุรี เขต มีนบุรี กรุงเทพ 10510</p>
                                <p>ปล. ร้านค้าอยู่ติดถนนใหญ่ ก่อนถึงโลตัสกับบิ๊กซีค่ะ</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="text-2xl text-gray-800 ">Line</div>
                            ID line : 0894586469
                            <div>
                                <a href="https://line.me/ti/p/3gi4Cs1meK#~" target="_blank" className="px-7 py-3.5 text-white text-xl flex w-56 rounded" style={{ backgroundColor: "#06c755" }}>
                                    <img className="w-8 mr-5" src="/line.svg" alt="" />
                                    <div>
                                        เพิ่มเพื่อน
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="text-2xl text-gray-800">Facebook</div>
                            Page : ส.จักราวุธ จักรเย็บผ้า อะไหล่จักร<br />
                            <a href="https://shorturl.at/wxDIY" target="_blank" className="px-7 py-3.5 text-white text-xl flex w-56 rounded" style={{ backgroundColor: "#1877f2" }}>
                                <FaFacebookF className="w-7 h-7 mr-5" />
                                <div className="text-center">
                                    ส.จักราวุธ
                                </div>
                            </a>
                        </div>
                        <div className="mt-5">
                            <div className="text-2xl text-gray-800">Shopee</div>
                            Shop : ChakrawutShop<br />
                            <a href="https://shopee.co.th/chakrawutshop" className="px-7 py-3.5 text-white text-xl flex w-56 rounded" style={{ backgroundColor: "#FF5722" }}>
                                <img className="h-8" src="/shopee.svg" alt="" />
                                <div className="text-center">
                                    ChakrawutShop
                                </div>
                            </a>
                        </div>
                        <div className="mt-5">
                            <div className="text-2xl text-gray-800">Phone</div>
                            Phone : 091-941-4289
                        </div>
                        <div className="mt-5">
                            <div className="text-2xl text-gray-800">Email</div>
                            Email : khunya992031@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
