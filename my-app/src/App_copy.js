import Register from './pages/Register'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
