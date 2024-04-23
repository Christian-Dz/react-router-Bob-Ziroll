import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import './App.css'
import { About } from '../pages/About'
import { Menu } from '../components/Menu'
import { VanDetail } from '../pages/VanDetail'
import { Vans } from '../pages/Vans'


function App() {

  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/**<Route path='/vans' element={<Vans/>}/>
          <Route path='/vans/:id' element={<VanDetail/>}/>**/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
