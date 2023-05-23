import { Route } from "react-router-dom";
import Card from "../../components/card";
import TextInput from "../../components/form/textInput";
import "./style.css";
import "../../styles/index.css";
import LockIcon from "../../assets/icons/locIcon";
import { get } from "../../service/apiClient";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const EditProfile = () => {
  const { userId } = useAuth();
  const [user, setUser] = useState({});
  const [userInitials, setUserInitials] = useState(``);

  useEffect(() => {
    async function getUserInfo() {
      const userInfo = await get(`users/${userId}`);
      setUser(userInfo.data.user);
      setUserInitials(getInitailsFromUser(userInfo.data.user));
    }
    getUserInfo();
  }, [userId]);

  const userDisplayName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  };

  const cohortDisplayName = (cohortId) => {
    return `Cohort ${cohortId}`;
  };

  const getInitailsFromUser = (user) => {
    const firstInital = user.firstName.slice(0, 1);
    const lastInital = user.lastName.slice(0, 1);
    return `${firstInital}${lastInital}`;
  };

  return (
    <>
      <main>
        <h2>Profile</h2>
        <br />
        <Card>
          <div className="profile-container">
            <div className="profile-icon">
              <p>{userInitials}</p>
            </div>
            <div className="profile-summary">
              <h3>{userDisplayName(user)}</h3>
              <p>Software Developer</p>
            </div>
          </div>

          <div className="main-info-grid">
            <div className="basic-info">
              <hr class="hr-line" />
              <br />
              <div className="basic-info-content info-grid">
                <h4 className="padding-title">Basic info</h4>
                <br />
                <p>Photo</p>
                <div className="profile-icon">
                  <p>{userInitials}</p>
                  <TextInput />
                </div>
              </div>
              <br></br>
              <small className="padding-field-name">First Name*</small>
              <textarea
                rows=""
                cols="40"
                className="textarea-small"
                placeholder="Alex"
                value={user.firstName}
              ></textarea>
              <small className="padding-field-name">Last Name*</small>
              <textarea
                rows=""
                cols="40"
                className="textarea-small"
                placeholder="Walker"
                value={user.lastName}
              ></textarea>
              <small className="padding-field-name">Username*</small>
              <textarea
                rows=""
                cols="40"
                className="textarea-small"
                placeholder="Alex Walker"
                value={userDisplayName(user)}
              ></textarea>
              <small className="padding-field-name">GitHub Username*</small>
              <textarea
                rows=""
                cols="40"
                className="textarea-small"
                placeholder="alex-walker"
                value={user.githubUrl}
              ></textarea>
            </div>

            <div className="training-info">
              <hr class="hr-line" />
              <br />
              <h4 className="padding-title">Training info</h4>
              <div className="training-info-content info-grid">
                <small className="padding-field-name">Role*</small>
                <div className="training-info">
                  <textarea
                    rows="1"
                    cols="40"
                    className="textarea-small"
                    placeholder="Student"
                    disabled
                    value={user.role}
                  ></textarea>
                  <div className="lock-icon">
                    <LockIcon />
                  </div>
                </div>

                <small className="padding-field-name">Specialism*</small>
                <div className="training-info">
                  <textarea
                    rows=""
                    cols="40"
                    className="textarea-small"
                    placeholder="Software Developer"
                    disabled
                  ></textarea>
                  <div className="lock-icon">
                    <LockIcon />
                  </div>
                </div>

                <small className="padding-field-name">Cohort*</small>
                <div className="training-info">
                  <textarea
                    rows=""
                    cols="40"
                    className="textarea-small"
                    placeholder="Cohort 4"
                    disabled
                    value={cohortDisplayName(user.cohortId)}
                  ></textarea>
                  <div className="lock-icon">
                    <LockIcon />
                  </div>
                </div>

                <small className="padding-field-name">Start Date*</small>
                <div className="training-info">
                  <textarea
                    rows=""
                    cols="40"
                    className="textarea-small"
                    placeholder="January 2023"
                    disabled
                  ></textarea>
                  <div className="lock-icon">
                    <LockIcon />
                  </div>
                </div>

                <small className="padding-field-name">End Date*</small>
                <div className="training-info">
                  <textarea
                    rows=""
                    cols="40"
                    className="textarea-small"
                    placeholder="January 2023"
                    disabled
                  ></textarea>
                  <div className="lock-icon">
                    <LockIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <hr class="hr-line" />
              <div className="contact-info-content info-grid">
                <h4 className="padding-title">Contact info</h4>
                <div className="padding-top"></div>
                <small className="padding-field-name">Email*</small>
                <textarea
                  cols="40"
                  className="textarea-small"
                  placeholder="alex.walker@boolean.co.uk"
                  value={user.email}
                ></textarea>
                <div className="padding"></div>
                <small className="padding-field-name">Mobile*</small>
                <textarea
                  cols="40"
                  className="textarea-small"
                  placeholder="07890 123456"
                ></textarea>
                <div className="padding"></div>
                <small className="padding-field-name">Password*</small>
                <div class="input-container">
                  <div className="password-field">
                    <textarea
                      rows="10"
                      cols="40"
                      class="textarea-small"
                      name="password"
                      placeholder="***************"
                      disabled
                      value={user.password}
                    ></textarea>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      className="eye-icon"
                    >
                      <path
                        fill="#64648C"
                        d="M20.967 18.033 19.5 16.567c.578-1.578.278-2.89-.9-3.934s-2.456-1.31-3.833-.8L13.3 10.367a4.03 4.03 0 0 1 1.267-.534A6.167 6.167 0 0 1 16 9.667c1.578 0 2.917.55 4.017 1.65 1.1 1.1 1.65 2.439 1.65 4.016 0 .49-.061.973-.184 1.45a4.404 4.404 0 0 1-.516 1.25Zm4.3 4.3L23.933 21a15.632 15.632 0 0 0 2.85-2.683c.811-.99 1.406-1.984 1.784-2.984-1.111-2.466-2.778-4.416-5-5.85-2.223-1.433-4.634-2.15-7.234-2.15-.933 0-1.888.09-2.866.267-.978.178-1.745.389-2.3.633L9.633 6.667c.778-.356 1.773-.667 2.984-.934 1.21-.266 2.394-.4 3.55-.4 3.177 0 6.083.906 8.716 2.717 2.634 1.811 4.562 4.239 5.784 7.283a16.47 16.47 0 0 1-2.234 3.9 16.1 16.1 0 0 1-3.166 3.1Zm1.933 7.534-5.6-5.5c-.778.31-1.655.55-2.633.716a17.62 17.62 0 0 1-2.967.25c-3.244 0-6.189-.905-8.833-2.716-2.645-1.811-4.59-4.24-5.834-7.284a15.127 15.127 0 0 1 1.85-3.383c.79-1.1 1.75-2.15 2.884-3.15l-4.2-4.2 1.4-1.433L28.5 28.4l-1.3 1.467ZM7.433 10.2c-.822.6-1.616 1.389-2.383 2.367-.767.977-1.317 1.9-1.65 2.766 1.133 2.467 2.839 4.417 5.117 5.85 2.277 1.434 4.86 2.15 7.75 2.15.733 0 1.455-.044 2.166-.133.712-.089 1.245-.222 1.6-.4L17.9 20.667a3.483 3.483 0 0 1-.9.25A6.49 6.49 0 0 1 16 21c-1.556 0-2.889-.544-4-1.633-1.111-1.09-1.667-2.434-1.667-4.034 0-.333.028-.666.084-1 .055-.333.139-.633.25-.9L7.433 10.2Z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="padding-bottom"></div>
                <br></br>
                <small>*Required</small>
                <br></br>
              </div>
            </div>

            <div className="bio">
              <div className="bio-content">
                <hr class="hr-line" />
                <h4>Bio</h4>
                <div className="padding-top"></div>
                <small>Bio</small>
                <textarea
                  placeholder="Tell us about yourself, your professional and educational highlights to date..."
                  spellCheck="false"
                  value={user.bio}
                ></textarea>
                <small>0/300</small>
              </div>

              <div class="button-container">
                <button type="button" className="button offwhite">
                  Cancel
                </button>
                <button type="button" class="button blue">
                  Save
                </button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default EditProfile;
