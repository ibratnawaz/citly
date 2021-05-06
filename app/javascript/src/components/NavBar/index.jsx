import React from "react";

import Container from "components/Container";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <Container>
        <div className="text-3xl font-bold font-mono inline-flex items-center pt-1 leading-5 text-black">
          Citly
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
