import './App.css'
import "./server.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { VanDetail } from './pages/Vans/VanDetail.jsx'
import { Vans } from './pages/Vans/Vans.jsx'
import { Layout } from './components/Layout.jsx'
import { Dashboard } from './pages/Host/Dashboard.jsx'
import { Income } from './pages/Host/Income.jsx'
import { Reviews } from './pages/Host/Reviews.jsx'
import { HostLayout } from './components/HostLayout.jsx'
import { HostVans } from './pages/Host/HostVans.jsx'
import { HostVanDetail } from './pages/Host/HostVanDetail.jsx'
import { HostVanPhotos } from './pages/Host/HostVanPhotos.jsx'
import { HostVanPricing } from './pages/Host/HostVanPricing.jsx'
import { HostVanInfo } from './pages/Host/HostVanInfo.jsx'
import { PageNotFound } from './pages/NotFound.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>            {/*Layout Routes*/}
            <Route path='*' element={<PageNotFound/>}/>                                
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/vans' element={<Vans/>}/>
            <Route path='/vans/:id' element={<VanDetail/>}/>
            <Route path='host' element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>             {/*Index Route*/}
              <Route path='hostvans' element={<HostVans/>}/>
              <Route path='hostvans/:id' element={<HostVanDetail/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path='pricing' element={<HostVanPricing/>}/>
                <Route path='photos' element={<HostVanPhotos/>}/>
              </Route>
              <Route path='income' element={<Income/>}/>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
