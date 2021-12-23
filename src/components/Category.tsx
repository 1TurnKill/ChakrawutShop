import { Link } from 'react-router-dom'
import xml from '../assets/catalog.xml'

export default () => {

    return (
        <div className="overflow-hidden flex flex-col w-72 bg-white border border-gray-300 px-4 my-10 h-full">
            <div className="text-md text-gray-800 py-3">
                หมวดหมู่สินค้า
            </div>
            {
                xml["catalog"]["card"].map((card: any) => {
                    return (
                        <Link to={`/products/${card.category._text}`} className='my-2'>
                            <div className="text-md text-gray-800 whitespace-nowrap overflow-ellipsis overflow-hidden hover:border-gray-400 border-b">
                                {card.title._text}
                            </div>
                        </Link>
                    )
                })
            }
        </div>

    )
}