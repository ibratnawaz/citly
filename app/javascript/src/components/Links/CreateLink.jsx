import React, { useState } from "react";

import LinkForm from "components/Links/Form/LinkForm";
import linksApi from "apis/links";

const CreateLink = ({ link, loading, setLink, createLink }) => {
  return (
    <LinkForm
      link={link}
      loading={loading}
      setLink={setLink}
      createLink={createLink}
    />
  );
};

export default CreateLink;
