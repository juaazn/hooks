import { useEffect, useState, } from 'react'
import Button from './Button'

export default function SelectCounter () {
  const [ num, setNum ] = useState(0)

  const parseNum = parseInt(num)
  console.log(parseNum)

  const insertNum = (event) => {
    useEffect(() => {
      setNum(event.target.value)
    }, [])
  }

  return (
    <>
      <article className="container__counter">
        <section>
          <p>Select number {num} </p>
          <input type="number" onChange={insertNum}/>
          <button onClick={insertNum}>Insert</button>
        </section>
        <Button counter={parseNum}/>
      </article>
    </>
  )
}
