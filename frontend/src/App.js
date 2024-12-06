import styled from "styled-components";
import bg from './img/bg.png';
import {MainLayout} from './styles/Layouts';
import Orb from './Components/Orb/Orb'
import React, { useMemo } from "react";
//import React, { useState, useMemo} from "react";
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Goal from './Components/Goal/Goal';
import WaterUsage from './Components/WaterUsage/WaterUsage';
import { useGlobalContext } from "./context/globalContext";
import EcoWaterGuide from "./Components/EcoWaterGuide/EcoWaterGuide";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { useAuth } from './AuthContext/AuthContext.jsx';

function App() {
  const {isAuthenticated} = useAuth();
  const [active, setActive] = React.useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1: 
        return <Dashboard />
      case 2:
        return <WaterUsage />
      case 3:
        return <Goal />
      case 4: 
        return <EcoWaterGuide/>
      default: 
        return <Dashboard />

    }
  }


  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  

  return (
    <Router>
    <AppStyled bg={bg} className='App'>
      {orbMemo}
      <MainLayout>
        <main>
          <Routes>
              <Route path='/' element={ <Register /> } />
              <Route path='/login' element={ !isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />} />

            <Route
              path='/dashboard'
              element={
                <MainLayout>
                  <Navigation active={active} setActive={setActive} />
                  {displayData()}
                </MainLayout>
              }
            />
          </Routes>
        </main>
      </MainLayout>
    </AppStyled>
  </Router>
  );
}

const AppStyled = styled.div`
      height: 100vh;
      background-image: url(${props => props.bg});
      position: relative;
      main{
         flex: 1;
         background: rgba(252, 246, 249, 0.78);
         border: 3px solid #FFFFFF;
         backdrop-filter: blur(4.5px);
         border-radius: 32px;
         overflow: auto;
         overflow-x: hidden;
           &::-webkit-scrollbar{
             width: 0;
          }
      }
  `;

export default App;


//<Route path='/' element={ <Register /> } />
//<Route path='/login2' element={ !isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />} />
