import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"

import "./server"
import Layout from './Layout/Layout';
import Dashboard from './pages/Host/DashBoard';
import HostLayout from './Layout/HostLayout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Hostvans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPrice from './pages/Host/HostVanPrice';
import HostVanPhotos from './pages/Host/HostVanPhotos';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="Vans" element={<Hostvans />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="Vans/:id" element={<HostVanDetails />}>

              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPrice />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
                
                 
         </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);