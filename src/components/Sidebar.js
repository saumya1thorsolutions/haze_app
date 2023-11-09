import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sider_baar">
        <div className="sidebar_menu_section">
          <ul className="sidebar_menu">
            <li className="sidebar_list ">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/home.svg" />
                </span>
                <span className="sidebar_menu_name active_list">Home</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/My Products.svg" />
                </span>

                <span className="sidebar_menu_name">My Products</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/Printing Methods.svg" />
                </span>

                <span className="sidebar_menu_name">Printing Methods</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Pricing Rules.svg" />
                  </span>
                </span>
                <span className="sidebar_menu_name">Pricing Rules</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Theme Builder.svg" />
                  </span>
                </span>
                <span className="sidebar_menu_name">Theme Builder</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Orders.svg" />
                  </span>
                </span>
                <span className="sidebar_menu_name">Orders</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Saved Designs.svg" />
                  </span>
                </span>
                <span className="sidebar_menu_name">Saved Designs</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="#">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Settings.svg" />
                  </span>
                </span>
                <span className="sidebar_menu_name">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
