import React, { useEffect } from "react";
import { BrowserRouter, BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import AllHome from "./components/AllHome";
import AllDashboard from "./components/Dash/AllDashboard";
import Nouss from "./components/Dash/nous/Nouss";
import Equipe from "./components/Dash/equipe/Equipe";
import Cariere from "./components/Dash/cariere/Cariere";
import List from "./components/Dash/list/List";
import Reseaux from "./components/Dash/reseaux/Reseaux";
import AllService from "./components/Service/AllService";
import Contact from "./components/Contact/Contact";
import Amenagement from "./components/Service/Amenagement/Amenagement";
import Ecran from "./components/Service/Ecran/Ecran";
import Plv from "./components/Service/Plv/Plv";
import Thermoformage from "./components/Service/Thermoformage/Thermoformage";
import Totem from "./components/Service/Totem/Totem";
import Vinyle from "./components/Service/Vinyle/Vinyle";
import Machine from "./components/Service/Machine/Machine";
import Client from "./components/client/Client";
export default function App() {
  
  return (
  
 
    <div className='Router'>
    <Router> 
    
    <div className='App'>
        <Routes>

      <Route  exact path='/' element={<AllHome/>}/>
      <Route  exact path='/AllDashboard' element={<AllDashboard/>}/>
      <Route  exact path='/Nouss' element={<Nouss/>}/>
      <Route  exact path='/Equipe' element={<Equipe/>}/>
      <Route  exact path='/Cariere' element={<Cariere/>}/>
      <Route  exact path='/List' element={<List/>}/>
      <Route  exact path='/Reseaux' element={<Reseaux/>}/>
      <Route  exact path='/AllService' element={<AllService/>}/>
      <Route  exact path='/Contact' element={<Contact/>}/>
      <Route  exact path='/Amenagement' element={<Amenagement/>}/>
      <Route  exact path='/Ecran' element={<Ecran/>}/>
      <Route  exact path='/Plv' element={<Plv/>}/>
      <Route  exact path='/Thermoformage' element={<Thermoformage/>}/>\
      <Route  exact path='/Totem' element={<Totem/>}/>
      <Route  exact path='/Vinyle' element={<Vinyle/>}/>
      <Route  exact path='/Machine' element={<Machine/>}/>
      <Route  exact path='/Client' element={<Client/>}/>
      </Routes>
      
    </div>
    </Router>
  
 
  
 </div>
  );
}
