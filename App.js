/*import Card from './Components/Card'*/
// import Header from './Components/Header'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from './Components/Routers/Home'
// import About from './Components/Routers/About'
// import Contact from './Components/Routers/Contact'
import Hero from './Components/Hero'
import Seconddiv from './Components/second'
import Thirddiv from './Components/third'
import Fourthdiv from './Components/fourth'
 import Tdiv from './Components/Tdiv'
 import Cards from './Components/Cards'
 import Tdiv2 from './Components/Tdiv2'
 import Map from './Components/Map'
 import Footer from './Components/footer'





function App(){
  return (
    <div>
      <Hero/>
      <Seconddiv/>
      <Thirddiv/>
      <Fourthdiv/>
      <Tdiv/>
      <Cards/>
      <Tdiv2/>
      <Map/>
      <Footer/> 
    </div>
      

    
  );
}

export default App;















{/* <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          < Route path='/about' element={<About />} />
          <Route path='/contact'  element={<Contact />} />
        </Routes>
      </Router> */}
      {/* <Card/>  */}
      