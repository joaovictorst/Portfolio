import './App.css'
import Fcontent from './pages/Fsection/Fsection'
import Navbar from './pages/NavBar/navBar'
import Projects from './pages/Ssection/Projects'
import Knowledge from './pages/Tsection/Tsection'

function App() {

  return (
    <div>
      <Navbar/>
      <Fcontent/>
      <Projects/>
      <Knowledge/>
    </div>
  )
}

export default App
