import { useState } from 'react'

export default function Button (props) {
  const [ count, setCount ] = useState(0)

  const increment = () => {
    setCount(count + props.counter)
  }

  const decrement = () => {
    setCount(count - props.counter)
  }

  return (
    <div className='divide__counter'>
      <button onClick={decrement}>-</button>
      <p><strong>{count}</strong></p>
      <button onClick={increment}>+</button>
    </div>
  )
}
