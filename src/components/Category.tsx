import { NavLink } from 'react-router-dom'
import xml from '../assets/catalog.xml'

export default () => {

    return (
        <div className="overflow-hidden flex flex-col bg-white border border-gray-300 px-4 my-10 h-full">
            <div className="text-md text-gray-800 py-3">
                หมวดหมู่สินค้า
            </div>
            {
                xml["catalog"]["card"].map((card: any) => {
                    return (
                        <NavLink exact to={`/products/catalog/${card.category._text}`} className="my-2 text-md text-gray-800 whitespace-nowrap overflow-ellipsis overflow-hidden hover:border-gray-400 border-b" activeClassName={`border-gray-400 border-b`}>
                            {card.category._text}
                        </NavLink>
                    )
                })
            }
        </div>

    )
}