
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruit from './component/Fruit'
import StateFruit from './component/StateFruit'
import Counter from './component/Counter'
import Register from './component/Register'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Parent from './component/Parent'
import Parentone from './component/Parentone'

function App() {
  

  return (
     <Router>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/contact">Contact</Link>
           <Link to="/register">Register</Link>
           <Link to="/Parent">Parent</Link>

           <Link to="/child">Product</Link>

        </nav>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<StateFruit />} />
          <Route path="/contact" element={<Fruit />} />
            <Route path="/register" element={<Register />} />
            <Route path='/parent' element={<Parent/>}/>
            <Route path='/child' element={<Parentone/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
