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

export default () => {
    return (
        <>
            <div className="text-center"></div>
            <div className="container max-w-7xl mx-auto">
                <div className='flex h-full'>
                    <div className='w-72 h-full'>
                        <Category></Category>
                    </div>
                    <div>
                        {
                            [...xml["catalog"]["card"].map((card: any) => {
                                return (
                                    <Route exact path={`/products/${card.category._text}`}>
                                        {(() => {
                                            const fils = xml2["products"]["item"].filter((a: any) => a.category._text == card.category._text)
                                            if (fils.length > 0)
                                                return fils.map((element: any, i: number) => {
                                                    return (
                                                        <div key={i} className='flex p-5 mt-5'>
                                                            <div className='overflow-hidden w-44 h-44 flex items-center relative py-2 mr-2'>
                                                                <img src={`${element.image._text}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <div className=' text-blue-500'>
                                                                    <Link to={`${element.link._text}`}>{element.title._text}</Link>
                                                                </div>
                                                                <div className='text-sm'>
                                                                    <div className="text-red-500 my-1">ราคาเริ่มต้น {element.cost._text} บาท</div>
                                                                    <div className="text-gray-600 my-2">ราคาเริ่มต้น {element.description._text} บาท</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            else {
                                                return (
                                                    <>
                                                        <div>
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
                                <CardContainer size={5}>
                                    {xml2["products"]["item"].map((element: any, i: number) => {
                                        return (
                                            <ProductCard key={i + element} card={element} reccommend={false} />
                                        )
                                    })}
                                </CardContainer>
                            </Route>]
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
