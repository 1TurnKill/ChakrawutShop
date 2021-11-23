import React, { ReactChild, useState, useRef, useEffect } from 'react'

export default (props: { children: ReactChild, size?: number }) => {
    const ref_grid = useRef(document.createElement("div"))
    const [grid, setGrid] = useState(0)
    useEffect(() => {
        function resize() {
            const w = ref_grid.current.getBoundingClientRect().width
            const z = Math.round((((props.size || 4) / 1280) * w))
            setGrid((z < 2) ? 2 : z)
        }
        resize()
        window.addEventListener('resize',resize)
    }, [])
    return (
        <div ref={ref_grid} className="container max-w-7xl mx-auto my-10">
            <ul style={{ gridTemplateColumns: `repeat(${grid},minmax(0,1fr))` }} className="grid gap-1 sm:gap-4 pb-24 sm:mx-14">
                {props.children}
            </ul>
        </div>
    )
}