import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Apropos from './components/Apropos/Apropos'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apropos' element={<Apropos/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}
