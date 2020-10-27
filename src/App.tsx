import React, { ButtonHTMLAttributes, useCallback, useEffect, useState } from 'react';

const Button = ({...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  useEffect(() => {
    console.log('button re-render')
  })

  useEffect(() => {
    console.log('button: on click render')
  }, [props.onClick])

  return <button {...props}/>
}

const App = () => {
  const [ count, setCount ] = useState<number>(0)

  useEffect(() => {
    console.log('app re-render')
  })

  return (
    <div className="App">
      <h1>hello world!</h1>
      <h4>Count: {count}</h4>
      <Button onClick={useCallback(() => setCount(prevState => prevState + 1), [])}>count</Button>
    </div>
  );
}

export default App;
