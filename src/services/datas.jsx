import React from "react";
import apiFetch from "./apiFetch";
import dataProcessing from "./dataProcessing";

const URL = "https://randomuser.me/api/?results=50";
const METHOD = "GET";

const Datas = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = React.useCallback(async () => {
    const response = await apiFetch(URL, METHOD, setLoading);
    setData(dataProcessing(await response.results));
  }, []);

  return { data, loading };
};

export default Datas;
