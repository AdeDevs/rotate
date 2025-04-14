import { Route, Routes } from "react-router-dom"
import NavBar from "./Nav"
import HomeScreen from "./screens/Home"
import AboutPage from "./screens/About"
import ClassPage from "./screens/Class"
import SchedulePage from "./screens/Schedule"
import MerchPage, { CropTopPage, HoodiePage } from "./screens/Merch"
import Footer from "./screens/Footer"
import ScrollToTop from "./screens/scrolltotop"

function App() {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/class" element={ <ClassPage/> } />
        <Route path="/schedule" element={ <SchedulePage /> } />
        <Route path="/merch" element={ <MerchPage /> } />
        <Route path="/hoodie" element={ <HoodiePage />} />
        <Route path="/crop" element={ <CropTopPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App