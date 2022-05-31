
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Buy from './Buy';
import Sell from './Sell';
import Instant from './Instant';
import Learn from './Learn';
import Login from './Login';
import GetStarted from './GetStarted';
import Individual from './Individual';
import Business from './Business';
import Signup from './Signup';
import Error from './Error'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
         <Routes>
           <Route index element ={<Home/>} />
           <Route path='Instant' element ={<Instant/>} />
           <Route path='Buy' element ={<Buy/>}/>
           <Route path='Sell' element={<Sell/>}/>
           <Route path='Learn' element={<Learn/>}/> 
           <Route path='Login' element={<Login/>}/>
           <Route path='GetStarted' element={<GetStarted/>}/>
           <Route path='Individual' element={<Individual/>}/>
           <Route path='Business' element={<Business/>}/>
           <Route path='Signup' element={<Signup/>}/>
           <Route path='*' element={<Error/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
