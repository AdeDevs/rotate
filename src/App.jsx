import { Route, Routes } from "react-router-dom"
import NavBar from "./Nav"
import HomeScreen from "./screens/Home"
import AboutPage from "./screens/About"
import CoursesPage from "./screens/Courses"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/courses" element={ <CoursesPage/> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App