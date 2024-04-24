import { createContext, useReducer } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './screens/Cart';
import Items from './screens/Items';



export const myContext = createContext();

const cartReducer = (state, action) => {
  console.log(state, action);
  // let newProd;
  let newState;


  switch (action.type) {

    case 'increase_q':
      newState = [...state];
      newState[action.payload].quantity += 1;

    return newState;
  
    case 'decrease_q':
      newState = [...state];
      newState[action.payload].quantity -= 1;

    return newState;

  default:
    return state
  
}}

const initialState = [
  {
    name: 'tea',
    price: 10,
    quantity: 0,
  },
  {
    name: 'coffee',
    price: 20,
    quantity: 0,
  },
  {
    name: 'milk',
    price: 30,
    quantity: 0,
  }
]
function App() {

  const [cartData, cartDispatch] = useReducer(cartReducer, initialState);

  return (
<myContext.Provider value={{cartData, cartDispatch}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </myContext.Provider>

  )
}

export default App;
