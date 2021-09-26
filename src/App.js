import { useEffect, useState } from 'react';
import './App.css';
import { Cart } from './components/Cart/Cart';
import Engineers from './components/Engineers/Engineers';
import Header from './components/Header/Header';

function App() {
   const [engineers, setEngineers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
      setLoading(true);
      fetch('./engineers.json')
         .then((res) => res.json())
         .then((data) => {
            setLoading(false);
            setEngineers(data);
         });
   }, []);

   const hireHnadler = (id) => {
      if (cartItems.some((engineer) => engineer.id === id)) {
         return;
      }

      const addedEngineer = engineers.find((engineer) => engineer.id === id);
      setCartItems((prev) => [...prev, addedEngineer]);
   };

   return (
      <div className='App'>
         <Header />
         <main className='bg-bg'>
            <div className='container mx-auto sm:flex justify-evenly space-x-2'>
               {loading ? (
                  'Loading...'
               ) : (
                  <Engineers engineers={engineers} hireHnadler={hireHnadler} />
               )}
               <Cart cartItems={cartItems} />
            </div>
         </main>
      </div>
   );
}

export default App;
