import React, { PropTypes } from 'react'
import NavBar from '../NavBar';
import Footer from './Footer';

const propTypes = {
  golden: PropTypes.bool,
}

const defaultProps = {
  golden: false,
}

const Main = function Main ({ children, golden }) {
  const goldenClass = golden ? ' -golden' : '';
  return (
    <div className='app'>
      <NavBar />
      <main className={`main-comp${goldenClass}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
