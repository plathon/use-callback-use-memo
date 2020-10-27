import React, { FC, useMemo, useState } from "react";

const useMemoComponent: FC = () => {

    const [elements, setElements] = useState([1,2,3,4,5])
    const [refresh, setRefresh] = useState(0)

    const memoElements = useMemo(() => {
    console.log('----------render with memo--------------')
    return (<ul>
        {elements.map((element, index) => <li key={index}>{element}</li>)}
    </ul>)}, [elements])

    const renderWithoutMemo = () => {
        console.log('----------render without memo--------------')
        return (<ul>
            {elements.map((element, index) => <li key={index}>{element}</li>)}
        </ul>)
    }

    return <>
        <button onClick={() => setRefresh(refresh + 1)}>reload {refresh}</button>
        <button onClick={() => setElements([ ...elements, elements[elements.length - 1] + 1 ])}>add element</button>
        {memoElements}
        <hr/>
        {renderWithoutMemo()}
    </>
}

export default useMemoComponent