import React from "react";

const HomesMain = (props) => {
  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">Your Dashboard</div>
        <div className="wraper_button_section">
          <button className="add_button">
            {" "}
            <i className="fa-solid fa-plus"></i>Add Product
          </button>
        </div>
      </div>

      <div className="main_container">
        <div className="home_section">
          <div className="home_section_row">
            <div className="home_data_col">
              <div className="home_data_col_header">
                <span className="home_data_icon">
                  <img src="assets/Image/Total Products.svg" />
                </span>
                <span className="home_data_name">Total Products</span>
              </div>
              <div className="home_data_number">50</div>
            </div>

            <div className="home_data_col">
              <div className="home_data_col_header">
                <span className="home_data_icon">
                  <img src="assets/Image/Total Orders.svg" />
                </span>
                <span className="home_data_name">Total Orders</span>
              </div>
              <div className="home_data_number">25</div>
            </div>

            <div className="home_data_col">
              <div className="home_data_col_header">
                <span className="home_data_icon">
                  <img src="assets/Image/Average Order Value.svg" />
                </span>
                <span className="home_data_name">Average Order Value</span>
              </div>
              <div className="home_data_number">5.5%</div>
            </div>

            <div className="home_data_col">
              <div className="home_data_col_header">
                <span className="home_data_icon">
                  <img src="assets/Image/Growth Rate.svg" />
                </span>
                <span className="home_data_name">Growth Rate</span>
              </div>
              <div className="home_data_number">9.9%</div>
            </div>
          </div>

          <div className="home_section_row">
            <div className="home_data_left_col"></div>
            <div className="home_data_right_col">
              <div className="home_data_col_header">
                <span className="home_data_icon">
                  <img src="assets/Image/Total Orders.svg" />
                </span>
                <span className="home_data_name">Total Orders</span>
              </div>
              <div className="home_data_number">25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomesMain;
