import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="text-white relative">
                <div className='relative' style={{ background: '#F88F01' }}>
                    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
                        <div>
                            <img src="/logo.png" width="325px" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="py-5 sticky top-0 left-0 z-50" style={{ background: "#87431D" }}>
                <div className="w-full max-w-6xl mx-auto flex flex-col justify-center xs:items-center items-end">
                    <div className="text-lg hidden xs:flex">
                        <div className="link-box">
                            <NavLink exact to="/" className="link" activeClassName={`text-gray-100`}>หน้าหลัก</NavLink>
                        </div>
                        <div className="link-box">
                            <NavLink to="/products" className="link" activeClassName={`text-gray-100`}>สินค้า</NavLink>
                        </div>
                        <div className="link-box">
                            <NavLink to="/news" className="link" activeClassName={`text-gray-100`}>ข่าวสาร</NavLink>
                        </div>
                        <div className="link-box">
                            <NavLink to="/contact" className="link" activeClassName={`text-gray-100`}>ติดต่อเรา</NavLink>
                        </div>
                        <div>
                            {/* <div className="px-3 hover:text-gray-300 transition duration-200 transform scale-90">
                                <div className="relative mx-auto text-gray-600">
                                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                        type="search" name="search" placeholder="Search" autoCapitalize='off' autoCorrect='off' autoComplete='off' />
                                    <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                                        <BiSearchAlt className="text-gray-600 h-6 w-6 fill-current" />
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className={`relative h-0 overflow-hidden transition-all duration-200 top-0 w-full ${open ? '' : 'h-auto'}`}>
                        <div className='w-full bg-white absolute'></div>
                        {/* <AiOutlineClose className='w-7 h-7 mx-5 absolute right-0 top-0 m-5' onClick={() => setOpen(false)} /> */}
                        <div className='relative'>
                            <div className="link-box">
                                <NavLink exact to="/" className="link" activeClassName={`text-gray-100`}>หน้าหลัก</NavLink>
                            </div>
                            <div className="link-box">
                                <NavLink to="/products" className="link" activeClassName={`text-gray-100`}>สินค้า</NavLink>
                            </div>
                            <div className="link-box">
                                <NavLink to="/news" className="link" activeClassName={`text-gray-100`}>ข่าวสาร</NavLink>
                            </div>
                            <div className="link-box">
                                <NavLink to="/contact" className="link" activeClassName={`text-gray-100`}>ติดต่อเรา</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='-my-2 block xs:hidden'>
                        <BiMenu className='w-7 h-7 mx-5' onClick={() => setOpen(!open)} />
                    </div>
                </div>
            </div>
        </>
    )
}