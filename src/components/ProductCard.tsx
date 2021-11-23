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
    "cost": {
        "_text": string
    }
}

export default (props: { card: card }) => {
    const card = props.card
    return (
        <div className="w-full overflow-hidden flex flex-col bg-white rounded shadow-md hover:shadow-lg transition duration-200">
            <a href={`/${props.card.link}`}>
                <div className="overflow-hidden w-full h-44 flex items-center relative px-2 py-2">
                    <div className="absolute top-0 left-0 mt-1 ml-1 px-4 py-1 select-none transform scale-75 text-white rounded-3xl" style={{ backgroundColor: '#d87c31' }}>แนะนำ</div>
                    <img src={card.image._text} className="w-full" alt="" />
                </div>
            </a>
            <div>
                <div className="my-3.5">
                    <a href={`/${props.card.link}`}>
                        <div className="text-base mx-2 text-center text-gray-600 hover:text-yellow-500">
                            {card.title._text}
                        </div>
                    </a>
                    <div className="text-green-500 text-center select-none">฿{card.cost._text}</div>
                </div>
            </div>
        </div>
    )
}