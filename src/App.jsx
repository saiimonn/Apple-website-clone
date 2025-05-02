import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Iphone from './Iphone.jsx';
import Watch from './Watch.jsx';
import Ipad from './Ipad.jsx';
import Gridsection from './Gridsection.jsx'

function App() {
  const[showRegionHeader, setRegionHeader] = useState(true);

  return (
    <div class = "min-h-screen w-full flex flex-col">
        <Navbar showRegionHeader={showRegionHeader} setRegionHeader={setRegionHeader} />
        <Watch showRegionHeader={showRegionHeader}/>
        <Ipad/>
        <Iphone/>
        <Gridsection/>
    </div>
  );
}

export default App