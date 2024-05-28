import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Apropos from './components/Apropos/Apropos'
import Logement from './components/Logement/Logement'
import Error from './components/Error/Error '

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apropos' element={<Apropos/>} />
        <Route path='logement/:id' element={<Logement/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}
