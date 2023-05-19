import Card from "./Card";
import Graphics from "./Graphics";
import Datas from "../../services/datas";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
  const result = Datas().data;

  return (
    <section className={`${styles.dashboard} p-3 background-principal`}>
      <h2 className="texto-secundario">KPI Dashboard</h2>
      <div className="mt-5">
        <Card result={result} />
        <Graphics result={result} />
      </div>
    </section>
  );
};

export default Dashboard;
