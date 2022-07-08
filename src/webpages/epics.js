import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Epics = () => {
  useEffect(() => {
    document.title = "Epics";
  });

  return (
    <Layout>
      <h1>Epics</h1>
    </Layout>
  );
};
export default Epics;
