import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantMenu from './pages/RestaurantMenu';
import Error from './pages/Error';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">

    <Routes>

    <Route path='/' element={ <Home />} />
    <Route path='/restaurant/:city' element={ <RestaurantList />} />
    <Route path='/restaurant/:id/menu' element={ <RestaurantMenu/>} />

    <Route path='/error' element={<Error />}/>
    <Route path='*' element={<NotFound />}/>
    

    </Routes>
  
    </div>
  );
}

export default App;
