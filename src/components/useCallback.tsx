import React, { FC, useCallback, useEffect, useState } from 'react'

const useCallbackComponent: FC = () => {
    const [ count, setCount ] = useState(0)

    const increment = useCallback(() => setCount(prev => ++prev), [])

    useEffect(() => {
        console.log('render one time')
    }, [increment])

    return <>
        <h1>useCallback: {count}</h1>
        <button onClick={increment}>increase</button>
    </>
}

export default useCallbackComponent