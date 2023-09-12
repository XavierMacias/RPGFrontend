//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Elements from './components/Elements/Elements';
import ElementDetail from './components/ElementDetail/ElementDetail';


function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/elements" element={<Elements />} />
        <Route path="/element/:id" element={<ElementDetail />} />
      </Routes>
    </>
  );
}

export default App;
