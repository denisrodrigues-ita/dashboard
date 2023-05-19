import React from "react";
import Dashboard from "./components/Dashboard";
import Institutions from "./components/Institutions";
import Kpis from "./components/Kpis";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Datas from "./services/datas";
import "./global.scss";

const App = () => {
  const { loading } = Datas();
  const [page, setPage] = React.useState("dashboard");

  return (
    <main className="d-flex">
      <Navbar setPage={setPage} />
      {loading ? (
        <Loading />
      ) : page === "dashboard" ? (
        <Dashboard />
      ) : page === "institutions" ? (
        <Institutions />
      ) : page === "kpis" ? (
        <Kpis />
      ) : null}
    </main>
  );
};

export default App;
