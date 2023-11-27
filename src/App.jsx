import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contenido from './pages/contenido'
import Layout from './layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<Contenido />}></Route>

          </Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
