import './App.css'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
      </Routes>
    </>
  )
}

export default App
