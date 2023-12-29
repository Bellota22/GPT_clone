import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Home'
import Auth from '../Auth'
import PrivateRoute from '../../components/PrivateRoute'
import SharedChat from '../SharedChat'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/chat/:chatId" element={<SharedChat />} />

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
