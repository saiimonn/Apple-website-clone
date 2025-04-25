import Navbar from './Navbar.jsx'
import Iphone from './Iphone.jsx'
import Watch from './Watch.jsx'

function App() {

  return (
    <div class = "min-h-screen w-full flex flex-col">
        <Navbar></Navbar>
        <Iphone></Iphone>
        <Watch></Watch>
    </div>
  );
}

export default App