import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";
import Container from "components/Container";
import Table from "components/URLs/Table/index";
import CreateUrl from "components/URLs/CreateUrl";
import PageLoader from "components/PageLoader";
import urlsApi from "apis/urls";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data.urls);
      //
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await urlsApi.create({ url: { original_url: url } });
      setUrl("");
      fetchUrls();
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const visitHandler = async (slug, visit, click_count) => {
    try {
      await urlsApi.update({
        slug,
        payload: { url: { click_count: click_count + 1 } },
      });
      setTimeout(() => {
        fetchUrls();
      }, 1000);
      window.open(visit, "_blank");
    } catch (error) {
      logger.error(error);
    }
  };

  const pinUrl = async (slug, status) => {
    try {
      const toggledStatus = status === "pinned" ? "unpinned" : "pinned";
      await urlsApi.update({
        slug,
        payload: { url: { status: toggledStatus } },
      });
      await fetchUrls();
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchUrls();
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

  return (
    <Container>
      <CreateUrl
        url={url}
        setUrl={setUrl}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      {either(isNil, isEmpty)(urls) ? (
        <h1 className="text-xl leading-5 text-center mt-4">
          No Short URLs created yet. Create new one now!
        </h1>
      ) : (
        <Table data={urls} visitHandler={visitHandler} pinUrl={pinUrl} />
      )}
    </Container>
  );
};

export default Dashboard;
