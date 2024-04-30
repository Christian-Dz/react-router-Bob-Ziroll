import "./App.css";
import "../server.js";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { About } from "../pages/About.jsx";
import { VanDetail } from "../pages/VanDetail.jsx";
import { Vans, loader } from "../pages/Vans.jsx";
import { Layout } from "../components/Layout.jsx";
import { Error } from "../components/Error.jsx";
import { Dashboard } from "../pages/host/Dashboard.jsx";
import { Income } from "../pages/host/Income.jsx";
import { Reviews } from "../pages/host/Reviews.jsx";
import { HostLayout } from "../components/HostLayout.jsx";
import { HostVans } from "../pages/host/HostVans.jsx";
import { HostVanDetail } from "../pages/host/HostVanDetail.jsx";
import { HostVanPhotos } from "../pages/host/HostVanPhotos.jsx";
import { HostVanPricing } from "../pages/host/HostVanPricing.jsx";
import { HostVanInfo } from "../pages/host/HostVanInfo.jsx";
import { PageNotFound } from "../pages/PageNotFound.jsx";
import { Login } from "../pages/Login.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>                              {/*Layout Routes*/}
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/vans" loader={loader} errorElement={<Error/>} element={<Vans/>}/>
      <Route path="/vans/:id" element={<VanDetail/>}/>
      <Route path="host" element={<HostLayout/>}>
        <Route index element={<Dashboard/>}/>                {/*Index Route*/}
        <Route path="hostvans" element={<HostVans/>}/>
        <Route path="hostvans/:id" element={<HostVanDetail/>}>
          <Route index element={<HostVanInfo/>}/>
          <Route path="pricing" element={<HostVanPricing/>}/>
          <Route path="photos" element={<HostVanPhotos/>}/>
        </Route>
        <Route path="income" element={<Income/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
