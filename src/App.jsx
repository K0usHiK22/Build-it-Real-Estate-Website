import React, { Suspense, lazy } from 'react';
import Header from './components/Header'
import About from './components/About'
// import CardSliderLogic from './components/CardSliderLogic'
// import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

const CardSliderLogic = lazy(() => import('./components/CardSliderLogic'));
const CustomerReviews = lazy(() => import('./components/CustomerReviews'));
const ChatAi = lazy(() => import('./components/ChatAi'));

const App = () => {
  return (
    <div className='bg-white w-full overflow-x-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Suspense fallback={<div className='text-center py-20'>Loading Slider...</div>}>
        <CardSliderLogic />
      </Suspense>
      <Suspense fallback={<div className='text-center py-20'>Loading Reviews...</div>}>
        <CustomerReviews />
      </Suspense>
      <Contact />
      <Footer />
      <Suspense fallback={null}>
        <ChatAi />
      </Suspense>
    </div>
  )
}

export default App

