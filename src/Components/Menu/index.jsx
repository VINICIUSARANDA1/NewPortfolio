
import React from "react";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <Link to='/'> Home </Link>
      <Link to='/projetos'> Projetos </Link>
      <Link to='/historia'> História </Link>
      
    </nav>
   
  );
}
