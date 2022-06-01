import Homepage from './components/Homepage/Homepage';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Begin from './components/Begin/Begin';
import Trainer from './components/Trainer/Trainer';
import Repositories from './components/Repositories';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Layout/>}> */}
        {/* Public routes */}
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='/' element={<Homepage/>}/>
        {/* <Route path='linkpage' element={<LinkPage/>}/> */}
        {/* <Route path='unauthorized' element={<Unauthorized/>}/> */}

        {/* Protected routes */}
        <Route path='begin' element={<Begin/>}/>
        <Route path='training' element={<Trainer />} />
        <Route path='repository' element={<Repositories />} />

        {/* <Route path='admin' element={<Admin/>}/> */}
    
        {/* <Route path='*' element={<Missing/>}/> */}
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
    
    )
}

export default App
