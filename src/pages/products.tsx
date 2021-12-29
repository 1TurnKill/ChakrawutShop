import React, { ReactChild, useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import CardContainer from '../components/CardContainer';
import ProductCard from '../components/ProductCard';
import xml from '../assets/catalog.xml'
import xml2 from '../assets/product.xml'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Category from '../components/Category';

function render_item(element: any, i: any) {
    return (
        <div key={i} className='flex flex-col sm:flex-row items-center lg:items-start p-5 mt-5'>
            <div className='overflow-hidden w-44 h-44 flex items-center relative py-2 mr-2'>
                <img src={`${element.image._text}`} alt="" />
            </div>
            <div>
                <div className=' text-blue-500'>
                    <Link to={`/products/item/${element.link._text}`}>{element.title._text}</Link>
                </div>
                <div className='text-sm'>
                    <div className="text-red-500">ราคาเริ่มต้น {element.cost._text} บาท</div>
                    <div className="text-gray-600 whitespace-pre-line">{element.description._text}</div>
                </div>
            </div>
        </div>
    )
}

export default () => {
    return (
        <>
            <div className="text-center"></div>
            <div className="container max-w-7xl mx-auto">
                <div className='flex flex-col-reverse h-full lg:flex-row'>
                    <div className='w-full lg:w-80 px-5 h-full sticky top-16'>
                        <div className='w-full mx-auto'>
                            <Category></Category>
                        </div>
                    </div>
                    <div>
                        {
                            [...xml["catalog"]["card"].map((card: any) => {
                                return (
                                    <Route exact path={`/products/catalog/${card.category._text}`}>
                                        {(() => {
                                            const fils = xml2["products"]["item"].filter((a: any) => a.category._text == card.category._text)
                                            if (fils.length > 0)
                                                return fils.map((element: any, i: number) => {
                                                    return render_item(element, i)
                                                })
                                            else {
                                                return (
                                                    <>
                                                        <div className='mt-10 ml-5'>
                                                            ไม่พบสินค้าในหมวดหมู่นี้
                                                        </div>
                                                    </>
                                                )
                                            }
                                        })()}
                                    </Route>
                                )
                            }),
                            <Route exact path={`/products`}>
                                {xml2["products"]["item"].map((element: any, i: number) => {
                                    return render_item(element, i)
                                })}
                            </Route>, ...xml2["products"]["item"].map((element: any, i: number) => {
                                return (
                                    <Route path={`/products/item/${element.link._text}`}>
                                        <div className='flex flex-col lg:flex-row items-center lg:items-start p-5 mt-5'>
                                            <div className='overflow-hidden w-72 h-72 flex items-center relative py-2 mr-2 mb-5'>
                                                <img className='w-full' src={`${element.image._text}`} alt="" />
                                            </div>
                                            <div>
                                                <div className=' text-blue-500'>
                                                    {element.title._text}
                                                </div>
                                                <div className='text-sm'>
                                                    <div className="text-red-500">ราคาเริ่มต้น {element.cost._text} บาท</div>
                                                    <div className="text-gray-600 ">
                                                        <div className='text-gray-700 font-semibold'>รายละเอียด :</div>
                                                        <div className="text-gray-600 whitespace-pre-line">{element.description._text.replace('\n','')}</div>
                                                    </div>
                                                    <div className="text-gray-600 "><span className='text-gray-700 font-semibold'>ยี่ห้อจักร :</span> <span>{element.serie._text}</span></div>
                                                    <div className="text-gray-600 "><span className='text-gray-700 font-semibold'>รหัสสินค้า :</span> <span>{element.model._text}</span></div>
                                                </div>
                                                <div>
                                                    <div className="flex flex-col items-center xs:items-start xs:flex-row mt-5">
                                                        <a href="https://shorturl.at/wxDIY" target="_blank" className="px-5 py-3.5 text-white text-xs rounded-sm hover:shadow-md flex w-56" style={{ backgroundColor: "#1877f2" }}>
                                                            <FaFacebookF className="w-4 h-4 my-auto mr-3" /><div>สอบถามรายละเอียดผ่าน FB inbox</div>
                                                        </a>
                                                        <a href="https://line.me/ti/p/3gi4Cs1meK#~" target="_blank" className="px-5 py-3.5 text-white text-xs rounded-sm hover:shadow-md flex w-56 mx-2 my-2 xs:my-0" style={{ backgroundColor: "#06c755" }}>
                                                            <img className="w-6 mr-5" src="/line.svg" alt="" />
                                                            <div>
                                                                สอบถามรายละเอียดผ่าน LINE chat
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Route>
                                )
                            })]
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
