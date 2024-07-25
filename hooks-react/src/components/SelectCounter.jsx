import { useEffect, useState, } from 'react'
import Button from './Button'

export default function SelectCounter () {
  const [ num, setNum ] = useState('')

  const parseNum = parseInt(num)

  const numInpu = (event) => {
    setNum(event.target.value)
  }

  return (
    <>
      <article className='container__counter'>
        <section className='flex_counter'>
          <p>Select number {num} </p>
          <input type='number' onChange={numInpu}/>
        </section>
        <Button counter={parseNum}/>
      </article>
    </>
  )
}
