import React from "react";

import Table from "./Table";

const ListLinks = ({ links, visitLinkHandler, pinLink }) => {
  return (
    <Table
      links={links}
      visitLinkHandler={visitLinkHandler}
      pinLink={pinLink}
    />
  );
};

export default ListLinks;
