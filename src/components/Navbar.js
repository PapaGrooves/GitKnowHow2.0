import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="branches">Branches</NavLink>
        <NavLink to="issues">Issues</NavLink>
        <NavLink to="originmaster">Originmaster</NavLink>
        <NavLink to="vscode">Vscode</NavLink>
      </nav>
      {/* displaying the children of the navbar, outlet */}
      <Outlet />
    </React.Fragment>
  );
}

export default Navbar;
