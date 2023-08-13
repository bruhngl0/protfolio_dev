import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>

        <h1>Aditya.dev</h1>
        <main>
            <Link to= '/home'>Home</Link>
            <Link to= '/about'>About</Link>
            <Link to= '/projects'>Projects</Link>
            <Link to= '/contact'>Contact</Link>
        </main>
    </nav>
  )
}

export default Header
