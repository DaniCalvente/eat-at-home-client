import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantMenu from './pages/RestaurantMenu';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Owner from './pages/Owner';
import RestaurantEdit from './pages/RestaurantEdit'
import MenuEdit from './pages/MenuEdit'
import {useState, useEffect} from "react"
import {verifyService} from "./services/auth.services"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [user, setUser] = useState(null)
  const [fetchingUser, setFetchingUser] = useState(true)

  useEffect(() => {
    getUserInfo()

  }, [])
  
  const getUserInfo = async () => {

    try {
      const response = await verifyService()
      // lo de abajo solo ocurre si el usuario fue verificado
      setIsLoggedIn(true)
      setUser(response.data)
      setFetchingUser(false)
    } catch(err) {
      setIsLoggedIn(false)
      setUser(null)
      setFetchingUser(false)
    }
  }


  if (fetchingUser) {
    return <h3>...Loading</h3>
  }

  return (
    <div className="App">

    <Navbar isLoggedIn={isLoggedIn} getUserInfo={getUserInfo} user={user}/>  


    <div className='background'>
      <Routes>

    <Route path='/' element={ <Home user={user}/>} />
    <Route path='/restaurant/:city' element={ <RestaurantList />} />
    <Route path='/restaurant/menu/:id' element={ <RestaurantMenu user={user}/>} />
    <Route path='/restaurant/owner' element={ <Owner/>} />
    <Route path='/restaurant/edit/:id' element={ <RestaurantEdit /> }/>

    {/* <Route path='/restaurant/menu/edit/:id' element={ <MenuEdit /> }/> */}
    <Route path='/restaurant/menu/edit/:id' element={ <MenuEdit /> } />   
    

    <Route path='/login' element={<Login  getUserInfo={getUserInfo}/>}/>
    <Route path='/signup' element={<Signup />}/>

    <Route path='/error' element={<Error />}/>
    <Route path='*' element={<NotFound />}/>
    

    </Routes>
    </div>
    
  
    </div>
  );
}

export default App;
