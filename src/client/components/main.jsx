import React, { PropTypes } from 'react'
import NavBar from './nav/nav-bar';
import Footer from './footer';

const Main = ({ children }) => <div className='app'>
  <NavBar />
  <main>
    {children}
  </main>
  <Footer />
</div>

export default Main;
