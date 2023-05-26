import { NavLink } from "react-router-dom";
import CohortIcon from "../../assets/icons/cohortIcon";
import HomeIcon from "../../assets/icons/homeIcon";
import ProfileIcon from "../../assets/icons/profileIcon";
import useAuth from "../../hooks/useAuth";
import jwt_decode from "jwt-decode";
import "./style.css";
import DataIcon from "../../assets/icons/dataIcon";
import LogIcon from "../../assets/icons/logIcon";
import { useEffect, useState } from "react";
import { getUsers } from "../../service/apiClient";


const Navigation = () => {
  const { token } = useAuth();
  const { userId } = jwt_decode(token);
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    getUsers()
    .then(data => {
        const currentUser = data.find(user => user.id === userId)
        if (currentUser) {
            setUserRole(currentUser.role.toLowerCase())
        }
    })
  }, [userId])

  if (!token) {
    return null;
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon colour="#000046" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/profile/${userId}`}>
            <ProfileIcon />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyCohort">
            <CohortIcon />
            <p>Cohort</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyExercises">
            <DataIcon />
            <p>Cohort</p>
          </NavLink>
        </li>
        {
          userRole === 'teacher' && (
            <li>
              <NavLink to="/logs">
                <LogIcon />
                <p>Logs</p>
              </NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Navigation;
