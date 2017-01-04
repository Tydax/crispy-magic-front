import React, { PropTypes } from 'react'
import NavBar from '../NavBar';
import Footer from './Footer';

const Main = ({ children }) => <div className='app'>
  <NavBar />
  <main className='main-comp'>
    {children}
  </main>
  <Footer />
</div>

export default Main;
