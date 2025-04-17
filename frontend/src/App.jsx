import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Frontpage from './Dashboard/Frontpage'
import Login from './Dashboard/login'
import Register from './Dashboard/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
