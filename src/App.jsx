import { useState, useEffect } from 'react'

import './App.css'

import Footer from './components/Layouts/Footer'
import WebFont from 'webfontloader';
import { ResumeProvider } from './Context'
import Main from './components/Main'

function App() {
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins','Prosto One', 'Rubik']
      }
    });
  }, []);

  return (
    <>
      <ResumeProvider >
       
       
        <Main />
        <Footer />
      </ResumeProvider>
    </>
  )
}

export default App
