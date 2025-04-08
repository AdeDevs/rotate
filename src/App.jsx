import { Route, Routes } from "react-router-dom"
import NavBar from "./Nav"
import HomeScreen from "./screens/Home"
import AboutPage from "./screens/About"
import ClassPage from "./screens/Class"
import SchedulePage from "./screens/Schedule"
import MerchPage from "./screens/Merch"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/class" element={ <ClassPage/> } />
        <Route path="/schedule" element={ <SchedulePage /> } />
        <Route path="/merch" element={ <MerchPage /> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App