import './App.css'
import "../server.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { About } from '../pages/About.jsx'
import { VanDetail } from '../pages/VanDetail.jsx'
import { Vans } from '../pages/Vans.jsx'
import { Layout } from '../components/Layout.jsx'
import { Dashboard } from '../pages/host/Dashboard.jsx'
import { Income } from '../pages/host/Income.jsx'
import { Reviews } from '../pages/host/Reviews.jsx'
import { HostLayout } from '../components/HostLayout.jsx'
import { HostVans } from '../pages/host/HostVans.jsx'
import { HostVanDetail } from '../pages/host/HostVanDetail.jsx'
import { HostVanPhotos } from '../pages/host/HostVanPhotos.jsx'
import { HostVanPricing } from '../pages/host/HostVanPricing.jsx'
import { HostVanInfo } from '../pages/host/HostVanInfo.jsx'
import { PageNotFound } from '../pages/PageNotFound.jsx'

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
