//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Elements from './components/Elements/Elements';
import ElementDetail from './components/ElementDetail/ElementDetail';
import Magics from './components/Magics/Magics';
import MagicDetail from './components/MagicDetail/MagicDetail';
import Weapons from './components/Weapons/Weapons';
import WeaponDetail from './components/WeaponDetail/WeaponDetail';
import Items from './components/Items/Items';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Creatures from './components/Creatures/Creatures';
import CreatureDetail from './components/CreatureDetail/CreatureDetail';


function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/elements" element={<Elements />} />
        <Route path="/element/:id" element={<ElementDetail />} />

        <Route path="/magics" element={<Magics />} />
        <Route path="/magic/:id" element={<MagicDetail />} />

        <Route path="/weapons" element={<Weapons />} />
        <Route path="/weapon/:id" element={<WeaponDetail />} />

        <Route path="/creatures" element={<Creatures />} />
        <Route path="/creature/:id" element={<CreatureDetail />} />

        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </>
  );
}

export default App;
