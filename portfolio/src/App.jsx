

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'


import './styles/about.scss'
import './styles/app.scss'
import './styles/contact.scss'
import './styles/header.scss'
import './styles/home.scss'



function App() {
 

  return (
    <Router>
      <Header />
      <Routes>
        <Route path= '/home' element={<Home />}/>
        <Route path= '/about' element={<About />}/>
        <Route path= '/projects' element={<Projects />}/>
        <Route path= '/contact' element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App