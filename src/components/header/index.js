import FullLogo from "../../assets/fullLogo"
import useAuth from "../../hooks/useAuth"
import './style.css'
import Card from "../card"
import ProfileIcon from "../../assets/icons/profileIcon"
import CogIcon from "../../assets/icons/cogIcon"
import LogoutIcon from "../../assets/icons/logoutIcon"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { getUserProfile } from "../../service/apiClient"
import { getInitials } from "../../utils/Users"

const Header = () => {
    const { token, onLogout } = useAuth()
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const { userId } = useAuth();
    const [ userProfile, setUserProfile ] = useState({})
    const [ userInitials, setUserInitials ] = useState("")


    useEffect(() => {
      const setProfile = async () => {
        const profile = await getUserProfile(userId)
        setUserProfile(profile)
      }
      setProfile()
    }, [userId])
    
    useEffect(() => {
      if (typeof userProfile ==='object' && typeof userProfile.firstName === 'string' && typeof userProfile.lastName ==='string') {
        setUserInitials(getInitials(userProfile.firstName, userProfile.lastName))
      }
    }, [userProfile])


    const onClickProfileIcon = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    if (!token) {
        return null
    }

    return (
        <header>
            <FullLogo textColour="white" />

            <div className="profile-icon" onClick={onClickProfileIcon}><p>{userInitials}</p></div>

            {isMenuVisible &&
                <div className="user-panel">
                    <Card>
                        <section className="post-details">
                            <div className="profile-icon">
                                <p>AJ</p>
                            </div>

                            <div className="post-user-name">
                                <p>Alex Jameson</p>
                                <small>Software Developer, Cohort 3</small>
                            </div>
                        </section>

                        <section className="user-panel-options border-top">
                            <ul>
                                <li><NavLink to={`/profile/${userId}`}><ProfileIcon /> <p>Profile</p></NavLink></li>
                                <li><NavLink to='/'><CogIcon /> <p>Settings &amp; Privacy</p></NavLink></li>
                                <li><NavLink to='#' onClick={onLogout}><LogoutIcon /> <p>Log out</p></NavLink></li>
                            </ul>
                        </section>
                    </Card>
                </div>
            }
        </header>
    )
}

export default Header
