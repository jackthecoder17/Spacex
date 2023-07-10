import {Routes , Route, useLocation} from 'react-router-dom'
import './App.styles.scss'
import { useEffect, useState} from 'react'
import Navigation from './components/navigation/navigation.component'
import Home from "./Routes/home/home.component"
import Destination from "./Routes/destination/destination.component"
import Crew from './Routes/crew/crew.component'
import Technology from './Routes/technology/technology.component'
function App() {
  const location = useLocation();
  const [active, setActive] = useState(getWebpageClassName(location.pathname));

  function getWebpageClassName(pathname){
    if (pathname === '/') return 'homepage';
    else if (pathname === '/destination') return 'destinationpage';
    else if (pathname === '/crew') return 'crewpage';
    else if (pathname === '/technology') return 'technologypage';
    else return '';
  }
  useEffect(() => {
    setActive(getWebpageClassName(location.pathname));
  },[location.pathname])
  
  return (
    <div className={active}>
    <Routes>
      <Route path="/" element={<Navigation />}> 
        <Route index element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
    </Routes>
    </div>

  )
}                                                                 

export default App
