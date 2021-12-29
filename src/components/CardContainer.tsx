import React, { ReactChild, useState, useRef, useEffect } from 'react'

export default (props: { children: ReactChild, size?: number, full?: boolean }) => {
    const ref_grid = useRef(document.createElement("div"))
    const [size,setSize] = useState(window.innerWidth)
    const [grid, setGrid] = useState(0)
    useEffect(() => {
        function resize() {
            const w = ref_grid.current.getBoundingClientRect().width
            const z = Math.round((((props.size || 4) / 1280) * w))
            setGrid((z < 2) ? 2 : z)
            setSize(window.innerWidth)
        }
        resize()
        window.addEventListener('resize', resize)
    }, [])
    return (
        <div ref={ref_grid} className="container max-w-7xl mx-auto my-10">
            {
                props.full && size < 500 ? (
                    <ul style={{ gridTemplateColumns: `repeat(1,minmax(0,1fr))` }} className="mx-5 grid gap-3 sm:gap-4 pb-24 sm:mx-10">
                        {props.children}
                    </ul>
                ) : (
                    <ul style={{ gridTemplateColumns: `repeat(${grid},minmax(0,1fr))` }} className="mx-5 grid gap-3 sm:gap-4 pb-24 sm:mx-10">
                        {props.children}
                    </ul>
                )
            }
        </div>
    )
}