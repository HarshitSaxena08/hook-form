import Useeffect from './components/useeffect/Useeffect';
import Hook1 from './components/usestate/usestate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './component1/Home';


import { Add1 } from './component1/Add1';
import Edit from './component1/Edit';


function App() {
  return (
    <div className="App">
      {/* <Hook1/> */}
      {/* <Useeffect/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Add1/>}/>
          <Route path='/edit' element={<Edit/>}/>





          <Route path='/usestate' element={<Hook1/>}/>
          <Route path='/useeffect' element={<Useeffect/>}/>

    
         </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
