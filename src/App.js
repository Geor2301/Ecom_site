import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51LLs9zSEVb6SftLlN1q9hvKdmGUtGrU8AoVCM880sF8BnNPTrNtHznqsAZUfrbn7Wkwag7ccq63WDBGcbAvFy3SU008kMjsDqf');

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }

      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    // BEM
   <Router>    
    <div className='app'>

      <Routes>

      <Route path='/login'  element={[
        <Login />
      ]}/>

      <Route path='/checkout' element={[
          <Header />,
          <Checkout />
      ]} />

      <Route path='/payment' element={[
          <Header />,
          <Elements stripe = { promise } >
            <Payment />
          </Elements>
          
      ]} />

      <Route path='/orders' element={[
          <Header />,
          <Orders />          
      ]} />

      <Route path='/' element={[
        <Header />,
          <Home />
      ]} />

      </Routes>

    </div>
   </Router>
      
  );
}

export default App;
