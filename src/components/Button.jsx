import React, { useState, useEffect } from 'react'

const Button = () => {
  console.log('me estoy repintando')

  const [mivariable, setMivariable] = useState(0)

  useEffect(() => {
    console.log('código especial')
  }, [mivariable])

  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter(prev => prev + 1)}>contador: {counter}</button>
      <button onClick={() => setMivariable(prev => prev + 1)}>cambiar el contenido de mivariable</button>
    </div>
  )
}

export default Button