import { useEffect, useState } from 'react'

export default function Greeting (props) {
  const [ greet, setGreet ] = useState(props.greet)

  useEffect(() => {
    setTimeout(() => {
      setGreet('Hola Alfonsina')
    },3000)
  }, [])

  return (
    <>
      <p>{greet}</p>
    </>
  )
}
