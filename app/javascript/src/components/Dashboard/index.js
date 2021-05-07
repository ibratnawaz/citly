import React, { useEffect, useState } from "react";

import Container from "components/Container";
import PageLoader from "components/PageLoader";
import ListLinks from "components/Links/ListLinks";
import CreateLink from "components/Links/CreateLink";
import linksApi from "apis/links";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const res = await linksApi.list();
      setLinks(res.data.links);
      setLoading(false);
    } catch (error) {
      logger.error(error);
    }
  };

  const pinLink = async slug => {
    try {
      setLoading(true);
      const res = await linksApi.update(slug);
      fetchLinks();
    } catch (error) {
      logger.error(error);
    }
  };

  const visitLinkHandler = visit => {
    setTimeout(() => {
      fetchLinks();
    }, 1500);
    window.open(visit, "_blank");
  };

  const createLink = async () => {
    try {
      setLoading(true);
      await linksApi.create({ link: { original_url: link } });
      setLink("");
      fetchLinks();
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  if (loading) {
    return (
      <Container>
        <div className="w-screen h-screen">
          <PageLoader />
        </div>
      </Container>
    );
  }

  if (!links.length) {
    return (
      <Container>
        <h1 className="my-5 text-xl leading-5 text-center">
          No shortened links created.
        </h1>
      </Container>
    );
  }

  return (
    <Container>
      <CreateLink
        link={link}
        loading={loading}
        setLink={setLink}
        createLink={createLink}
      />
      <ListLinks
        links={links}
        visitLinkHandler={visitLinkHandler}
        pinLink={pinLink}
      />
    </Container>
  );
};

export default Dashboard;
