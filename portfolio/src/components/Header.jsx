import React from 'react'
import { Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>

        <h4>aditya.dev</h4>
        <main>
            <HashLink to= '/#home'>Home</HashLink>
            <HashLink to= '/#about'>About</HashLink>
            <HashLink to= '/#projects'>Projects</HashLink>
            <HashLink to= '/#contact'>Contact</HashLink>
        </main>
    </nav>
  )
}

export default Header
