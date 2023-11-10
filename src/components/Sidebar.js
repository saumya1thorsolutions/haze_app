import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/home');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <>
      <div className="sider_baar">
        <div className="sidebar_menu_section">
          <ul className="sidebar_menu">
            <li className="sidebar_list ">
              <a href="/home">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/home.svg" />
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/home' ? 'active_list active' : ''}`}>Home</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/my-products">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/My Products.svg" />
                </span>

                <span className={`sidebar_menu_name ${activeLink === '/my-products' ? 'active_list active' : ''}`}>My Products</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/printing-methods">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/Printing Methods.svg" />
                </span>

                <span className={`sidebar_menu_name ${activeLink === '/printing-methods' ? 'active_list active' : ''}`}>Printing Methods</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/pricing-rules">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Pricing Rules.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/pricing-rules' ? 'active_list active' : ''}`}>Pricing Rules</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/theme-builder">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Theme Builder.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/theme-builder' ? 'active_list active' : ''}`}>Theme Builder</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/orders">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Orders.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/orders' ? 'active_list active' : ''}`}>Orders</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/saved-designs">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Saved Designs.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/saved-designs' ? 'active_list active' : ''}`}>Saved Designs</span>
              </a>
            </li>

            <li className="sidebar_list">
              <a href="/settings">
                <span className="sidebar_menu_icon">
                  <span className="sidebar_menu_icon">
                    <img src="assets/Image/Settings.svg" />
                  </span>
                </span>
                <span className={`sidebar_menu_name ${activeLink === '/settings' ? 'active_list active' : ''}`}>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
