import React from 'react';
import NavBar from '../components/NavBar';

const withNavBar = (Component) => {
  return (props) => (
    <NavBar>
      <Component {...props} />
    </NavBar>
  );
};

export default withNavBar;
