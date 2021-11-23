import React, { useRef } from 'react'

type card = {
    "title": {
        "_text": string
    }
    "image": {
        "_text": string
    }
    "link": {
        "_text": string
    }
    "theme": {
        "_text": string
    }
}

export default (props: { card: card }) => {

    return (
        <div className="select-none relative shadow-md hover:shadow-xl transition duration-200" style={{ height: "200px" }}>
            <div className={`overflow-hidden h-full w-full flex justify-center items-center ${props.card.theme._text == "white" ? " bg-gray-700" : " bg-blue-50"}`}>
                {/* <img className="w-full" src={`${props.card.image._text}`} alt="" /> */}
            </div>
            <div className={`w-full h-full absolute top-0 left-0 flex justify-center sm:justify-between items-center`}>
                <div></div>
                <div className={`flex flex-col sm:mr-8 ${props.card.theme._text == "white" ? "text-white" : "text-gray-600"}`}>
                    <div className="mb-7 text-center text-xl font-medium">{props.card.title._text}</div>
                    <a href={`${props.card.link._text}`} className="p-2">
                        <div className={`bg-transparent border-2 px-3 transition duration-200 ${props.card.theme._text == "white" ? 'border-white hover:bg-gray-600' : 'border-gray-600 hover:bg-white'}`}>ดูสินค้าทั้งหมด</div>
                    </a>
                </div>
            </div>
        </div>
    )
}