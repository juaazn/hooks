import Logo from './Logo'

export default function Header () {
  return (
    <header className='container_header'>
      <picture className='logo'>
        <Logo />
      </picture>
      <ul className='menu'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </header>
  )
}
