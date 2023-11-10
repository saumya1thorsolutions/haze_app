import React from "react";

const PrintingMethods = () => {
  return (
    <div class="left_wrapper">
      <div class="wrapper_header">
        <div class="wraper_header_title">Printing Methods</div>
        <div class="wraper_button_section products_btn  Printing_Methods_btn">
          <button class="add_button ">View Demos</button>
          <button
            class="add_button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + Add Printing Method
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Viewfff Themes
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Select a Theme
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                1 .Theme 1
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                2 .Theme 2
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="main_container">
        <div class="my_products">
          <div class=" products_hr"></div>

          <div class="add_products_section printin_methods_section">
            <div class="add_products_col">
              <div class="add_products_col_icon">
                <img src="assets/Image/Printing Methods.svg" />
              </div>
              <div class="add_products_col_title">
                There’s no printing method decided, yet
              </div>

              <div class="wraper_button_section">
                <button class="add_button ">+ Add Printing Method</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingMethods;
