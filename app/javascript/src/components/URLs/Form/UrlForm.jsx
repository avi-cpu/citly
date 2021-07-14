import React from "react";

import Input from "components/Input";
import Button from "components/Button";

const UrlForm = ({ url, setUrl, loading, handleSubmit }) => {
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <Input
        value={url}
        placeholder="Enter the link here"
        onChange={e => setUrl(e.target.value)}
      />
      <Button type="submit" buttonText="Shorten!" loading={loading} />
    </form>
  );
};

export default UrlForm;
