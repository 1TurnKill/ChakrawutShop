type card = {
    "image": {
        "_text": string
    }
    "title": {
        "_text": string
    }
    "date": {
        "_text": string
    }
    "description": {
        "_text": string
    }
    "readme": {
        "_text": string
    }
}

export default (props:{card: card|any}) => {
    const card = props.card
    return (
        <div className="w-full overflow-hidden flex flex-col">
            <div className="overflow-hidden w-full h-44 flex items-center">
                <img src={card.image._text} className="w-full" alt="" />
            </div>
            <div>
                <div className="my-3.5">
                    <div className="text-xl text-gray-800">
                        {card.title._text}
                    </div>
                    <div className="text-xs">
                        {card.date._text}
                    </div>
                </div>
                <div className="text-base text-gray-500">
                    {card.description._text}
                </div>
                <a href={card.readme._text} className="text-xs text-green-400 hover:text-green-500">
                    Read more{">>"}
                </a>
            </div>
        </div>
    )
}