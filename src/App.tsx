import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './component/About'
import AllInOne from './component/AllInOne'
import Footer from './component/Footer'
import Landing from './component/Landing'
import Navbar from './component/Navbar'
import Pricing from './component/Pricing'
import Support from './component/Support'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Landing />
            <About />
            <Support />
            <AllInOne />
            <Pricing />
            <Footer />
          </>
        } />
        <Route path='/about' element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
        <Route path='/landing' element={
          <>
            <Navbar />
            <Landing />
            <Footer />
          </>
        } />
        <Route path='/support' element={
          <>
            <Navbar />
            <Support />
            <Footer />
          </>
        } />
        <Route path='/allInOne' element={
          <>
            <Navbar />
            <AllInOne />
            <Footer />
          </>
        } />
        <Route path='/pricing' element={
          <>
            <Navbar />
            <Pricing />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

