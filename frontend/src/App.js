import styled from "styled-components";
import bg from './img/bg.png';
import {MainLayout} from './styles/Layouts';
import Orb from './Components/Orb/Orb'
import React, {  useMemo} from "react";
//import React, { useState, useMemo} from "react";
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Goal from './Components/Goal/Goal';
import WaterUsage from './Components/WaterUsage/WaterUsage';
import { useGlobalContext } from "./context/globalContext";
import EcoWaterGuide from "./Components/EcoWaterGuide/EcoWaterGuide";

function App() {
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
    <AppStyled bg={bg} className="App">
      {orbMemo}
       <MainLayout>
            <Navigation active={active} setActive={setActive}/>
            <main>
              {displayData()}
            </main>
        </MainLayout>
    
    </AppStyled>
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
