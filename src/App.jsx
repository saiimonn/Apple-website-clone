import { useState } from 'react';
import Navbar from './Navbar.jsx'
import Iphone from './Iphone.jsx'
import Watch from './Watch.jsx'

function App() {
  const[showRegionHeader, setRegionHeader] = useState(true);

  return (
    <div class = "min-h-screen w-full flex flex-col">
        <Navbar showRegionHeader={showRegionHeader} setRegionHeader={setRegionHeader} />
        <Iphone showRegionHeader={showRegionHeader} />
        <Watch></Watch>
    </div>
  );
}

export default App