import './App.css'
import './components/Nav.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import NotFound from './pages/NotFoundPage.jsx'
import Nav from './components/Nav.jsx'
function App() {

  return (

    <BrowserRouter>

      <Nav />

      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
