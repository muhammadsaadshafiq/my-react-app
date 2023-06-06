import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const DashboardPage = () => {
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
                    padding: "7px ",
                    "margin-top": "48px",
                    "padding-left": "8px",
                    "padding-right": "7px",
                    gap: "13px",
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
                <div className="flex flex-row items-start justify-start w-full">
                  <Img
                    className="h-[35px]"
                    src="images/img_maximize.svg"
                    alt="maximize"
                  />
                  <Text
                    className="mt-[3px] text-[22px] sm:text-lg text-purple-800 md:text-xl"
                    size="txtPoppinsBold22"
                  >
                    Kalpay
                  </Text>
                </div>
                <MenuItem
                  icon={
                    <Img
                      className="h-[19px] w-5"
                      src="images/img_home.svg"
                      alt="home"
                    />
                  }
                  active={window.location.pathname === "/dashboard"}
                  href="/dashboard"
                >
                  <Text>Dashboard</Text>
                </MenuItem>
                <div className="flex flex-col gap-[58px] items-center justify-end mt-[50px] w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px]"
                    onClick={() => navigate("/users")}
                    leftIcon={
                      <div className="mr-[11px] bg-blue_gray-900 my-px">
                        <Img src="images/img_user.svg" alt="user" />
                      </div>
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Users
                    </div>
                  </Button>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px]"
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
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px]"
                    onClick={() => navigate("/billpayments")}
                    leftIcon={
                      <Img
                        className="mb-px mr-[11px]"
                        src="images/img_file.svg"
                        alt="file"
                      />
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Bill payments
                    </div>
                  </Button>
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
            <div className="flex flex-1 flex-col gap-9 justify-start md:px-5 w-full">
              <div className="bg-purple-800 h-[61px] rotate-[180deg] shadow-bs w-full"></div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[37px] w-[85%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                  <List
                    className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-2 rounded-lg shadow-bs1 w-full">
                      <div className="flex flex-col items-start justify-start mt-[27px] w-[95%] md:w-full">
                        <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[5px] w-[84%] md:w-full">
                          <Img
                            className="h-[42px]"
                            src="images/img_user_purple_800.svg"
                            alt="user"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              Total Users
                            </Text>
                            <Text
                              className="text-black-900 text-xl"
                              size="txtPoppinsBold20"
                            >
                              300
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-100 h-px mt-0.5 w-full" />
                        <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[11px] w-[57%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Update Now
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-2 rounded-lg shadow-bs1 w-full">
                      <div className="flex flex-col items-start justify-start mt-[27px] w-[95%] md:w-full">
                        <div className="flex flex-row gap-[22px] items-center justify-between md:ml-[0] ml-[5px] w-[98%] md:w-full">
                          <Img
                            className="h-[41px]"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              Total Business
                            </Text>
                            <Text
                              className="text-black-900 text-xl"
                              size="txtPoppinsBold20"
                            >
                              300
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-100 h-px mt-0.5 w-full" />
                        <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[11px] w-[57%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Update Now
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-3.5 rounded-lg shadow-bs1 w-full">
                      <div className="flex flex-col items-start justify-start mt-[22px] w-full">
                        <div className="flex flex-row gap-[17px] items-center justify-between ml-4 md:ml-[0] w-[82%] md:w-full">
                          <Img
                            className="h-[46px]"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              Total Icome
                            </Text>
                            <Text
                              className="mt-0.5 text-black-900 text-xl"
                              size="txtPoppinsBold20"
                            >
                              $50,000
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-100 h-px mt-0.5 w-full" />
                        <div className="flex flex-row items-center justify-start ml-4 md:ml-[0] mt-[11px] w-[58%] md:w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                          <Text
                            className="ml-[5px] text-[10px] text-blue_gray-900"
                            size="txtPoppinsRegular10"
                          >
                            $25,000
                          </Text>
                          <Img
                            className="h-[13px] ml-[7px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="ml-[5px] text-[10px] text-blue_gray-900"
                            size="txtPoppinsRegular10"
                          >
                            $25,000
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-[15px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-0.5 rounded-lg shadow-bs1 w-full">
                      <div className="flex flex-col items-center justify-start mt-[11px] w-[96%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtPoppinsBold15"
                          >
                            Users
                          </Text>
                          <div className="flex flex-col items-center justify-start mt-0.5">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Text
                                  className="capitalize text-[15px] text-black-900"
                                  size="txtPoppinsRegular15Black900"
                                >
                                  Week
                                </Text>
                                <Img
                                  className="h-1.5"
                                  src="images/img_arrowdown_black_900.svg"
                                  alt="arrowdown"
                                />
                              </div>
                              <Line className="bg-blue_gray-900 h-px w-full" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-[11px] w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="h-[11px] text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              100
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              80
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              60
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              40
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              20
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              10
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[127px] items-center justify-start p-2 w-[96%]"
                            style={{
                              backgroundImage: "url('images/img_group34.svg')",
                            }}
                          >
                            <Img
                              className="h-[105px] my-0.5"
                              src="images/img_group5221.svg"
                              alt="group5221"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-end w-[87%] md:w-full">
                          <Text
                            className="text-[7px] text-gray-500_01 text-right"
                            size="txtPoppinsRegular7"
                          >
                            Mon
                          </Text>
                          <Text
                            className="ml-[31px] text-[7px] text-gray-500_01 text-right"
                            size="txtPoppinsRegular7"
                          >
                            Tue
                          </Text>
                          <Text
                            className="ml-[34px] text-[7px] text-gray-500_01 text-right"
                            size="txtPoppinsRegular7"
                          >
                            Wed
                          </Text>
                          <Text
                            className="ml-8 text-[7px] text-gray-500_01 text-right"
                            size="txtPoppinsRegular7"
                          >
                            Thu
                          </Text>
                          <Text
                            className="ml-8 text-[7px] text-gray-500_01 text-right"
                            size="txtPoppinsRegular7"
                          >
                            Fri
                          </Text>
                          <Text
                            className="h-[11px] ml-8 text-[7px] text-gray-500_01 text-right"
                            size="txtPoppinsRegular7"
                          >
                            Sat
                          </Text>
                          <Text
                            className="ml-8 text-[7px] text-gray-500_01 text-right"
                            size="txtPoppinsRegular7"
                          >
                            Sun
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-0.5 rounded-lg shadow-bs1 w-full">
                      <div className="flex flex-col gap-3 items-center justify-start mt-2.5 w-[96%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtPoppinsBold15"
                          >
                            Business
                          </Text>
                          <div className="flex flex-col items-center justify-start mt-[3px]">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="capitalize text-[15px] text-black-900"
                                  size="txtPoppinsRegular15Black900"
                                >
                                  Week
                                </Text>
                                <Img
                                  className="h-1.5"
                                  src="images/img_arrowdown_black_900.svg"
                                  alt="arrowdown"
                                />
                              </div>
                              <Line className="bg-blue_gray-900 h-px w-full" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="h-[11px] text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              100
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              80
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              60
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              40
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              20
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              10
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-0.5 w-[96%]">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[127px] items-center justify-start p-2 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group35.svg')",
                                }}
                              >
                                <Img
                                  className="h-[105px] my-0.5"
                                  src="images/img_group5221_purple_500.svg"
                                  alt="group5221"
                                />
                              </div>
                              <Line className="bg-gray-200 h-[127px] w-px" />
                            </div>
                            <Line className="bg-gray-200 h-px w-full" />
                            <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
                              <Text
                                className="text-[7px] text-gray-500_01 text-right"
                                size="txtPoppinsRegular7"
                              >
                                Mon
                              </Text>
                              <Text
                                className="text-[7px] text-gray-500_01 text-right"
                                size="txtPoppinsRegular7"
                              >
                                Tue
                              </Text>
                              <Text
                                className="text-[7px] text-gray-500_01 text-right"
                                size="txtPoppinsRegular7"
                              >
                                Wed
                              </Text>
                              <Text
                                className="text-[7px] text-gray-500_01 text-right"
                                size="txtPoppinsRegular7"
                              >
                                Thu
                              </Text>
                              <Text
                                className="text-[7px] text-gray-500_01 text-right"
                                size="txtPoppinsRegular7"
                              >
                                Fri
                              </Text>
                              <Text
                                className="h-[11px] text-[7px] text-gray-500_01 text-right"
                                size="txtPoppinsRegular7"
                              >
                                Sat
                              </Text>
                              <Text
                                className="text-[7px] text-gray-500_01 text-right"
                                size="txtPoppinsRegular7"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-[7px] rounded-lg shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                        <Text
                          className="mt-0.5 text-[15px] text-black-900"
                          size="txtPoppinsBold15"
                        >
                          Income
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-4 items-center justify-between w-full">
                              <Text
                                className="capitalize text-[15px] text-black-900"
                                size="txtPoppinsRegular15Black900"
                              >
                                Week
                              </Text>
                              <Img
                                className="h-1.5"
                                src="images/img_arrowdown_black_900.svg"
                                alt="arrowdown"
                              />
                            </div>
                            <Line className="bg-blue_gray-900 h-px w-full" />
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-1 w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[2%] md:w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <Text
                              className="h-[11px] text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              100
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              80
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              60
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              40
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              20
                            </Text>
                            <Text
                              className="text-[7px] text-gray-500_01"
                              size="txtPoppinsRegular7"
                            >
                              10
                            </Text>
                          </div>
                        </div>
                        <div className="md:h-[107px] h-[134px] relative w-[98%] md:w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat md:h-[107px] h-[132px] inset-[0] justify-center m-auto pb-[19px] px-[19px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group34.svg')",
                            }}
                          >
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[110px] inset-x-[0] justify-start mx-auto p-2 top-[0] w-4/5"
                              style={{
                                backgroundImage:
                                  "url('images/img_group33.svg')",
                              }}
                            >
                              <Img
                                className="h-1 md:ml-[0] ml-[86px] mr-[434px] w-[5px]"
                                src="images/img_dot8.svg"
                                alt="dotEight"
                              />
                              <Img
                                className="h-1 md:ml-[0] ml-[267px] mr-[253px] w-[5px]"
                                src="images/img_dot8.svg"
                                alt="dotEight_One"
                              />
                              <Img
                                className="h-1 mb-[26px] md:ml-[0] ml-[350px] mr-[170px] mt-[53px] w-[5px]"
                                src="images/img_dot8.svg"
                                alt="dotEight_Two"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[14%] h-1 left-[35%] w-[5px]"
                              src="images/img_dot8.svg"
                              alt="dotEight_Three"
                            />
                            <Img
                              className="absolute bottom-[40%] h-1 right-[11%] w-[5px]"
                              src="images/img_dot8.svg"
                              alt="dotEight_Four"
                            />
                            <Img
                              className="absolute h-1 left-[9%] top-[41%] w-[5px]"
                              src="images/img_dot8.svg"
                              alt="dotEight_Five"
                            />
                          </div>
                          <Img
                            className="absolute h-1 right-[24%] top-[0] w-[5px]"
                            src="images/img_dot8.svg"
                            alt="dotEight_Six"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                        <Text
                          className="text-gray-500_01 text-right text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Mon
                        </Text>
                        <Text
                          className="text-gray-500_01 text-right text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Tue
                        </Text>
                        <Text
                          className="text-gray-500_01 text-right text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Wed
                        </Text>
                        <Text
                          className="text-gray-500_01 text-right text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Thu
                        </Text>
                        <Text
                          className="text-gray-500_01 text-right text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Fri
                        </Text>
                        <Text
                          className="text-gray-500_01 text-right text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Sat
                        </Text>
                        <Text
                          className="text-gray-500_01 text-right text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Sun
                        </Text>
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

export default DashboardPage;
