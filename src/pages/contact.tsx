import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { useKeenSlider } from "keen-slider/react"
import { FaFacebookF } from 'react-icons/fa'
import "keen-slider/keen-slider.min.css"

export default () => {
    // SAWADDEE P JOB
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
                            <NavLink to="/products" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>สินค้า</NavLink>
                            <NavLink to="/news" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>ข่าวสาร</NavLink>
                            <NavLink to="/contact" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>ติดต่อเรา</NavLink>
                            <div className="px-3 hover:text-gray-300 transition duration-200">
                                <BiSearchAlt className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            






            
            <footer style={{ background: '#87431D' }} className="text-white py-11 px-10">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="w-full md:grid md:grid-cols-5 md:gap-x-5">
                        <div className="col-span-2 w-full flex flex-col items-center">
                            <img src="big_logo.png" sizes="(max-width: 479px) 92vw, 99px" width="300" alt="" className="footer-image" />
                        </div>
                    </div>
                    <div className="w-full grid sm:grid-cols-1 md:grid-cols-5 gap-x-5">
                        <div className="md:col-span-2 w-full flex flex-col items-center">
                            <div className="">
                                <div className="text-center pb-5">
                                    <div>
                                        เวลาเปิด-ปิดทำการ
                                    </div>
                                    <div>
                                        8:00-18:00 น.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 py-4 md:py-0">
                            <h5 className="text-2xl"> เมนูหลัก </h5>
                            <ul role="list" className="w-list-unstyled">
                                <li><a href="" className="footer-link">หน้าหลัก</a></li>
                                <li><a href="/about" className="footer-link">เกี่ยวกับเรา</a></li>
                                <li><a href="/products" className="footer-link">สินค้า</a></li>
                                <li><a href="/news" className="footer-link">ข่าวสาร</a></li>
                                <li><a href="/contact" className="footer-link">ติดต่อเรา</a></li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h5 className="text-2xl"> ติดต่อเราได้ที่ </h5>
                            <div>
                                99-99/1 ซอย 203/1
                                ถนนรามคำเเหง เขต มีนบุรี เเขวง มีนบุรี
                                กรุงเทพ 10510
                                * ร้านค้าอยู่ติดถนนใหญ่ ก่อนถึงโลตัสกับบิ๊กซี *
                                เบอร์โทร : 091-941-4289
                                khunya9992031@gmail.com
                            </div>
                            <div className="grid grid-cols-3 w-40" >
                                <a href="https://bit.ly/3GaemqI" className="">
                                    <div className="mt-1">
                                        <FaFacebookF className="w-8 h-8" />
                                    </div>
                                </a>
                                <a href="/triamCard/login.php" className="">
                                    <div className="mt-1">
                                        <img className="w-8" src="/line.svg" alt="" />
                                    </div>
                                </a>
                                <a href="#" className="">
                                    <div>
                                        <img className="w-8" src="/shopee.svg" alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
