import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
import { useUser } from "./contextApi/UserContext";
const Sidebar = () => {

  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="">
            <FaHome className="icons logo" />
            Home
          </a>
        </li>
        <li>
          <a href="">
            <FaHashtag className="icons" /> Explore
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBell className="icons" /> Notifications
          </a>
        </li>
        <li>
          <a href="">
            <FaRegEnvelope className="icons" /> Messages
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBookmark className="icons" /> Bookmarks
          </a>
        </li>
        <li>
          <a href="">
            <FaClipboardList className="icons" /> Lists
          </a>
        </li>
        <li>
          <a href="">
            <FaUserAlt className="icons" /> Profile
          </a>
        </li>
        <li>
          <a href="">
            <FaMehBlank className="icons" /> More
          </a>
        </li>
        <div onClick={handleLogout} className="sidebar__Btn">
          <a href="">Logout</a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
