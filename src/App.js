import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/General/Home";
import Nav from "./pages/General/Nav";
import Popular from "./pages/Popular/Popular";
import Battle from "./pages/Battle/Battle";
import NotFound from "./pages/NotFound";
import Results from "./pages/Battle/Results";

function App() {

  return (
     <BrowserRouter>
    <div className='container'>
      <Nav />


      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='popular' element={<Popular />}/>
        <Route path='battle' element={<Battle />}/>
        <Route path='battle/results' element={<Results />}/>

       <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
       </BrowserRouter>
  );
}

export default App;
