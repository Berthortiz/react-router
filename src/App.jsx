import './App.css'
import './components/Nav.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import NotFound from './pages/NotFoundPage.jsx'
import Nav from './components/Nav.jsx'
import HomePage from './pages/HomePage.jsx'
import UserPage from './pages/UserPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
function App() {

  return (

    <BrowserRouter>

      <Nav />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/usuarios' element={<Navigate replace to='/users' />} />

        <Route path='/dashboard/*' element={<Dashboard />} >
          <Route path="wellcome" element={<h3>wellcome!!!!</h3>} />
        </Route>


        <Route path='*' element={<NotFound />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
