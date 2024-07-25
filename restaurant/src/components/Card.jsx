export default function Card (props) {
  return (
    <article className='flex_card' >
      {
        props.menu.map((item) => {
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
