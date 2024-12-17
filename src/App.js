import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './Page Components/MyNavbar';
import Register from './Page Components/Register';
import View from './Page Components/View';
import SignIn from './Page Components/SignIn';

function App() {
  return (
    <>

      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<View />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
