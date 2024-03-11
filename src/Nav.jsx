import React from "react";
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (
      <nav
        style={{
          borderBottom: 'solid 1px',
          padding: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          margin: '2rem',
          listStyleType: 'none',
        }}
      >
      <Link to="/home" style={{listStyle:'none'}}>Home</Link>
      <Link to="/users">Users</Link>
      </nav>
    )
  }
  
export default Navigation;