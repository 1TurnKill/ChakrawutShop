import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'

export default () => {
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
                            <NavLink to="/products" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>สินค้า</NavLink>
                            <NavLink to="/news" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>ข่าวสาร</NavLink>
                            <NavLink to="/contract" className="px-4 hover:text-gray-300 transition duration-200" activeClassName={`text-gray-300`}>ติดต่อเรา</NavLink>
                            <div className="px-3 hover:text-gray-300 transition duration-200">
                                <BiSearchAlt className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}