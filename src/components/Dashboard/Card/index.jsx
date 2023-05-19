import {
  BsFillPeopleFill,
  BsPercent,
  BsFlagFill,
  BsGenderFemale,
} from "react-icons/bs";
import styles from "./card.module.scss";

const Card = (result) => {
  const { countPeople, averageAge, countCountries, countWomenOver18 } =
    result.result;

  return (
    <section className="container-fluid">
      <div className="d-flex g-2 overflow-auto texto-secundario">
        {countPeople && (
          <div className={`${styles.wCard} col`}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center gap-4">
                  <div>
                    <BsFillPeopleFill size={30} />
                  </div>
                  <div>
                    <h5 className="card-title text-capitalize fw-bold fw-bold">
                      People
                    </h5>
                    <p className="card-text m-0">
                      <span className="fs-4 fw-bold">{countPeople}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {averageAge && (
          <div className={`${styles.wCard} col`}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center gap-4">
                  <div>
                    <BsPercent size={30} />
                  </div>
                  <div>
                    <h5 className="card-title text-capitalize fw-bold">
                      Average Age
                    </h5>
                    <p className="card-text m-0">
                      <span className="fs-4 fw-bold">{averageAge}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {countCountries && (
          <div className={`${styles.wCard} col`}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center gap-4">
                  <div>
                    <BsFlagFill size={30} />
                  </div>
                  <div>
                    <h5 className="card-title text-capitalize fw-bold">
                      Nationality
                    </h5>
                    <p className="card-text m-0">
                      <span className="fs-4 fw-bold">{countCountries}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {countWomenOver18 && (
          <div className={`${styles.wCard} col`}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center gap-4">
                  <div>
                    <BsGenderFemale size={30} />
                  </div>
                  <div>
                    <h5 className="card-title text-capitalize fw-bold">
                      Women over 18
                    </h5>
                    <p className="card-text m-0">
                      <span className="fs-4 fw-bold">{countWomenOver18}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Card;
