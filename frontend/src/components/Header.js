import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>To-Do List</h1>
      <Link to='/' style={LinkStyle}>
        Home
      </Link>{' '}
      |
      <Link to='/addbucket' style={LinkStyle}>
        Add New Bucket
      </Link>
    </header>
  );
}

const headerStyle = {
  textAlign: 'center',
  background: '#0000809e',
  color: '#fff',
  padding: '10px',
  margin: '10px 0px',
  borderRadius: '20px',
};

const LinkStyle = {
  color: '#fff',
  padding: '3px',
  textDecoration: 'none',
};

export default Header;
