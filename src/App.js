import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantMenu from './pages/RestaurantMenu';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';


function App() {
  return (
    <div className="App">

    <Navbar/>

    <Routes>

    <Route path='/' element={ <Home />} />
    <Route path='/restaurant/:city' element={ <RestaurantList />} />
    <Route path='/restaurant/menu/:id' element={ <RestaurantMenu/>} />

    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>

    <Route path='/error' element={<Error />}/>
    <Route path='*' element={<NotFound />}/>
    

    </Routes>
  
    </div>
  );
}

export default App;
