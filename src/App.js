import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './Page Components/MyNavbar';
import Register from './Page Components/Register';
import View from './Page Components/View';

function App() {
  return (
    <>

      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" elements={<Register />} />
          <Route path="/view" elements={<View />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
