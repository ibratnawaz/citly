import React from "react";
import NavBar from "components/NavBar";

import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white mt-2 p-2">{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
