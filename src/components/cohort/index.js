import CohortSoftwareDevelopmentIcon from "../../assets/icons/cohortSoftwareDevelopmentIcon";
import "./style.css"
const Cohort = ({ cohortId }) => {
  return (
    <div className="cohort-item">
      <CohortSoftwareDevelopmentIcon />
      <div className="cohort-info">
        <h5>Software Development</h5>
        <p>Cohort {`${cohortId}`}</p>
      </div>
    </div>
  );
};

export default Cohort;
