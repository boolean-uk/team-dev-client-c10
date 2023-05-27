import ProfileButton from "../profileButton";
import Cohort from "../cohort";
import { useState, useEffect } from "react";
import { get } from "../../service/apiClient";

const ListOfCohorts = () => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    get("cohorts").then((response) => {
      setCohorts(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h4>Cohorts</h4>
      </div>
      <hr className="line"/>
      <ul>
        {cohorts.map((cohort) => {
            return <Cohort
            key={cohort.id}
            cohortId={cohort.courseId}
            />

        })}
      </ul>
    </>
  );
};

export default ListOfCohorts;
