import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";

const Header = (props) => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <header className="Haze_header">
      <div className="logo">
        <a href="#"> Haze</a>
      </div>
      <nav className="nav_bar">
        <ul className="nav_menu">
          <li className="nav_list"> Help Center</li>
          <li className="nav_list" onClick={handelLogout}>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
