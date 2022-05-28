import Homepage from './components/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Public routes */}
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        {/* <Route path='linkpage' element={<LinkPage/>}/> */}
        {/* <Route path='unauthorized' element={<Unauthorized/>}/> */}

        {/* Protected routes */}
        <Route path='/homepage' element={<Homepage/>}/>
        {/* <Route path='editor' element={<Editor/>}/> */}
        {/* <Route path='admin' element={<Admin/>}/> */}
        {/* <Route path='lounge' element={<Lounge/>}/> */}
    
        {/* <Route path='*' element={<Missing/>}/> */}
      </Route>
    </Routes>
    )
}

export default App
