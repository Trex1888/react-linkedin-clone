import React from "react";
import "../styles/Header.css";
import {
  BusinessCenter,
  Chat,
  Home,
  MoreVert,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.talkandroid.com/uploads/2015/11/linkedin-app-logo.png"
          alt="img"
        />

        <div className="header__search">
          <Search />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="Logout" onClick={logoutApp} />
        <HeaderOption Icon={MoreVert} title="More" />
      </div>
    </div>
  );
}

export default Header;
