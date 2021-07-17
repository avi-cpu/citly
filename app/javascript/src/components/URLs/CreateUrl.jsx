import React from "react";
import UrlForm from "./Form/UrlForm.jsx";

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
