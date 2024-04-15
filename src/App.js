import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
function App() {
  return <div className="App">
<<<<<<< HEAD
    
    </div>;
    
=======

<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Route> 
</Routes>
  </div>;
>>>>>>> ee8a792e25af0b13e29bbf30916dea36124ceb2c
}

export default App;
