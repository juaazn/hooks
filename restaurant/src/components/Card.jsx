export default function Card () {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]  

  return (
    <article className='flex_card' >
      {
        dishes.map((item) => {
          return (
            <section className='card' key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <strong>{item.price}</strong>
            </section>
          )
        })
      }
    </article>
  )
}
