import React from "react";
import UrlForm from "./Form/UrlForm.jsx";
//import urlsApi from "apis/urls";

const CreateUrl = ({ url, setUrl, loading, handleSubmit }) => {
  return (
    <UrlForm
      url={url}
      setUrl={setUrl}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateUrl;
