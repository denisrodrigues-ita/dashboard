import { RiBankLine, RiDashboardFill, RiBarChartFill } from "react-icons/ri";
import { BsGearFill, BsBellFill, BsPersonCircle } from "react-icons/bs";
import styles from "./navbar.module.scss";
import logo from "../../assets/img/ng7.png";

const Navbar = (setPage) => {
  return (
    <nav
      className={`${styles.nav} d-flex flex-column gap-5 background-secundario text-light`}
    >
      <div className="text-center justify-content-center align-items-center py-3">
        <img src={logo} alt="Logo da empresa NG7" className="img-fluid" />
      </div>
      <button
        onClick={() => {
          setPage.setPage("dashboard");
        }}
        className="btn texto-principal"
        type="button"
      >
        <div className="d-flex flex-column justify-content-center align-items-center py-3 ">
          <RiDashboardFill size={40} />
          <span>Dashboard</span>
        </div>
      </button>
      <button
        onClick={() => setPage.setPage("institutions")}
        className="btn texto-principal"
        type="button"
      >
        <div className="d-flex flex-column justify-content-center align-items-center py-3">
          <RiBankLine size={40} />
          <span>Institutions</span>
        </div>
      </button>
      <button
        onClick={() => setPage.setPage("kpis")}
        className="btn texto-principal"
        type="button"
      >
        <div className="d-flex flex-column justify-content-center align-items-center py-3">
          <RiBarChartFill size={40} />
          <span>KPIs</span>
        </div>
      </button>
      <div className="d-flex flex-column align-items-center gap-3">
        <button className="btn texto-principal" type="button">
          <BsGearFill size={28} />
        </button>
        <button className="btn texto-principal" type="button">
          <BsBellFill size={28} />
        </button>
        <button className="btn texto-principal" type="button">
          <BsPersonCircle size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
