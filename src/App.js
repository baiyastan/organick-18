import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AboutUsPage from "./Pages/AboutUsPage";
import HomeTwoPage from "./Pages/HomeTwoPage";
function App() {
  return <div className="App wrapper">

    
   
  


<Routes>

  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/aboutus" element={<AboutUsPage/>}/>
    <Route path='/hometwo' element={<HomeTwoPage/>}/>
  </Route> 
</Routes>
  </div>;

}

export default App;
