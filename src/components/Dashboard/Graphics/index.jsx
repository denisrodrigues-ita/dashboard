import Doughnut from "./Doughnut";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import HBarChart from "./HBarChart";
import PolarAreaChart from "./PolarAreaChart";

const Graphics = (result) => {
  return (
    <div className="container-fluid mt-2">
      <div className="row g-2">
        <div className="col-12 col-lg-4">
          <div className="bg-light rounded h-100">
            <Doughnut result={result} />
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="bg-light rounded h-100">
            <BarChart result={result} />
          </div>
        </div>
      </div>
      <div className="row g-2 mt-0">
        <div className="col-12 col-lg-6">
          <div className="bg-light rounded h-100">
            <LineChart result={result} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="bg-light rounded h-100">
            <HBarChart result={result} />
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div className="bg-light rounded h-100">
            <PolarAreaChart result={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
