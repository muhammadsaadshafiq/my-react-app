import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const BillpaymentsPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[180px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "6px ",
                    "margin-top": "53px",
                    "padding-left": "8px",
                    "padding-right": "6px",
                    gap: "11px",
                    margin: " ",
                    color: "#ffffff",
                    "font-size": "13px",
                    "border-radius": "5px",
                    [`&:hover, &.ps-active`]: {
                      "font-weight": "400 !important",
                      "background-color": "#64009cff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[206px] mt-[5px] pt-[7px] px-3.5 w-[85%]"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-[35px]"
                      src="images/img_maximize_35x152.svg"
                      alt="maximize"
                    />
                    <Text
                      className="mt-[3px] text-[22px] sm:text-lg text-purple-800 md:text-xl"
                      size="txtPoppinsBold22"
                    >
                      Kalpay
                    </Text>
                  </div>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px] mt-[55px]"
                    onClick={() => navigate("/dashboard")}
                    leftIcon={
                      <div className="mb-px mr-[13px] w-5 bg-blue_gray-900">
                        <Img
                          src="images/img_home_blue_gray_900.svg"
                          alt="home"
                        />
                      </div>
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Dashboard
                    </div>
                  </Button>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px] mt-[58px]"
                    onClick={() => navigate("/users")}
                    leftIcon={
                      <div className="mr-[11px] bg-black-900_01 my-px">
                        <Img
                          src="images/img_user_black_900_01.svg"
                          alt="user"
                        />
                      </div>
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Users
                    </div>
                  </Button>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px] mt-[58px]"
                    onClick={() => navigate("/business")}
                    leftIcon={
                      <Img
                        className="mr-[13px] my-px"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Business
                    </div>
                  </Button>
                </div>
                <MenuItem
                  icon={
                    <Img
                      className="h-[19px]"
                      src="images/img_calculator.svg"
                      alt="calculator"
                    />
                  }
                  active={window.location.pathname === "/billpayments"}
                  href="/billpayments"
                >
                  <Text>Bill payments</Text>
                </MenuItem>
                <div className="flex flex-col gap-[59px] items-center justify-end mt-[51px] w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px]"
                    onClick={() => navigate("/reports")}
                    leftIcon={
                      <Img
                        className="h-[17px] mb-0.5 mr-[15px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Reports
                    </div>
                  </Button>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px]"
                    onClick={() => navigate("/")}
                    leftIcon={
                      <Img
                        className="h-[17px] mb-0.5 mr-[9px]"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Log out
                    </div>
                  </Button>
                </div>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[15px] items-center justify-start md:px-5 w-full">
              <div className="bg-purple-800 h-[61px] rotate-[180deg] shadow-bs w-full"></div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[18px] rounded-[10px] w-[96%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start mb-4 mt-[53px] w-full">
                  <div className="bg-gray-100_01 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-1 rounded-[10px] w-full">
                    <Text
                      className="mb-2 sm:mt-0 mt-3 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Company Name
                    </Text>
                    <Text
                      className="mb-2 sm:ml-[0] ml-[146px] sm:mt-0 mt-3 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Company Type
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[120px] sm:mt-0 my-2.5 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Created On
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[132px] sm:mt-0 my-2.5 text-purple-800 text-right text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Actions
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[27px] items-start justify-start w-1/5 md:w-full">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[71%] md:w-full">
                        <Button className="bg-white-A700 flex h-8 items-center justify-center p-[5px] rounded-[50%] shadow-bs2 w-8">
                          <Img
                            src="images/img_group1_32x32.png"
                            alt="groupOne"
                          />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Senelec
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-1/2 md:w-full">
                        <Button className="bg-white-A700 flex h-8 items-center justify-center p-1.5 rounded-[50%] shadow-bs2 w-8">
                          <Img src="images/img_group5267.png" alt="group5267" />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          SDE
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[67%] md:w-full">
                        <Button className="bg-white-A700 flex h-8 items-center justify-center p-1.5 rounded-[50%] shadow-bs2 w-8">
                          <Img src="images/img_group5268.png" alt="group5268" />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Rapido
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[69%] md:w-full">
                        <Button className="bg-white-A700 flex h-8 items-center justify-center p-[9px] rounded-[50%] shadow-bs2 w-8">
                          <Img
                            className="h-3.5"
                            src="images/img_group5269.png"
                            alt="group5269"
                          />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Orange
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[54%] md:w-full">
                        <Button className="bg-white-A700 flex h-8 items-center justify-center p-[7px] rounded-[50%] shadow-bs2 w-8">
                          <Img src="images/img_group5270.png" alt="group5270" />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Tigo
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-3/4 md:w-full">
                        <div className="bg-white-A700 flex flex-col h-8 items-center justify-start p-1 rounded-[50%] shadow-bs2 w-8">
                          <Img
                            className="h-[7px] md:h-auto my-2 object-cover w-full"
                            src="images/img_cafeespressol.png"
                            alt="cafeespressol"
                          />
                        </div>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Expresso
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-3/4 md:w-full">
                        <Button className="bg-white-A700 flex h-8 items-center justify-center p-1.5 rounded-[50%] shadow-bs2 w-8">
                          <Img src="images/img_group5272.png" alt="group5272" />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Woyofall
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-full">
                        <Button className="bg-white-A700 flex h-8 items-center justify-center p-1 rounded-[50%] shadow-bs2 w-8">
                          <Img src="images/img_group5244.png" alt="group5273" />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Liga Transport
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[66%] md:w-full">
                      <div className="flex flex-col justify-start w-[97%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="mt-0.5 text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Electricity{" "}
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            10, Feb, 2023
                          </Text>
                          <Img
                            className="h-2.5 mt-1"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        </div>
                        <div className="flex flex-row gap-[119px] items-center justify-start md:ml-[0] ml-[154px] w-[26%] md:w-full">
                          <Img
                            className="h-px w-px"
                            src="images/img_vector.svg"
                            alt="vector"
                          />
                          <Img
                            className="h-px w-px"
                            src="images/img_vector.svg"
                            alt="vector_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Water Services
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            12, Sep, 2023
                          </Text>
                          <Img
                            className="h-2.5 mt-[3px]"
                            src="images/img_rewind.svg"
                            alt="rewind_One"
                          />
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector_Two"
                        />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-[37px] w-[96%] md:w-full">
                          <Text
                            className="sm:mt-0 mt-0.5 text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bike Taxi
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[148px] text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            16, Mar, 2023
                          </Text>
                          <Img
                            className="h-2.5 sm:ml-[0] ml-[123px] sm:mt-0 mt-1"
                            src="images/img_rewind.svg"
                            alt="rewind_Two"
                          />
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector_Three"
                        />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-[37px] w-[96%] md:w-full">
                          <Text
                            className="sm:mt-0 mt-[3px] text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Telecom
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[148px] text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            10, Feb, 2023
                          </Text>
                          <Img
                            className="h-2.5 sm:ml-[0] ml-[125px] sm:mt-0 mt-1"
                            src="images/img_rewind.svg"
                            alt="rewind_Three"
                          />
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector_Four"
                        />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-[38px] w-[96%] md:w-full">
                          <Text
                            className="sm:mt-0 mt-0.5 text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Telecom
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[148px] text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            12, Sep, 2023
                          </Text>
                          <Img
                            className="h-2.5 sm:ml-[0] ml-[124px] sm:mt-0 mt-[3px]"
                            src="images/img_rewind.svg"
                            alt="rewind_Four"
                          />
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector_Five"
                        />
                        <div className="flex flex-row items-start justify-between mt-[37px] w-full">
                          <Text
                            className="mt-0.5 text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Coffee Beans
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            16, Mar, 2023
                          </Text>
                          <Img
                            className="h-2.5 mt-1"
                            src="images/img_rewind.svg"
                            alt="rewind_Five"
                          />
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector_Six"
                        />
                        <div className="flex flex-row items-start justify-between mt-[37px] w-[97%] md:w-full">
                          <Text
                            className="mt-0.5 text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Electricity
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            10, Feb, 2023
                          </Text>
                          <Img
                            className="h-2.5 mt-1"
                            src="images/img_rewind.svg"
                            alt="rewind_Six"
                          />
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector_Seven"
                        />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[37px] w-[97%] md:w-full">
                          <Text
                            className="sm:mt-0 mt-[3px] text-blue_gray-900 text-center text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Transport
                          </Text>
                          <Text
                            className="ml-36 sm:ml-[0] text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            16, Mar, 2023
                          </Text>
                          <Img
                            className="h-2.5 sm:ml-[0] ml-[123px] sm:mt-0 mt-1"
                            src="images/img_rewind.svg"
                            alt="rewind_Seven"
                          />
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector_Eight"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillpaymentsPage;
