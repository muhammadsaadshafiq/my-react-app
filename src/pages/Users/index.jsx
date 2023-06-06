import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const UsersPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const [group604value, setGroup604value] = React.useState("");

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
                    "margin-top": "50px",
                    "padding-left": "8px",
                    "padding-right": "7px",
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
                <div className="flex flex-col gap-14 items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-[35px]"
                      src="images/img_maximize_purple_800.svg"
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
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px]"
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
                </div>
                <MenuItem
                  icon={
                    <Img
                      className="h-[17px]"
                      src="images/img_user_white_a700.svg"
                      alt="user"
                    />
                  }
                  active={window.location.pathname === "/users"}
                  href="/users"
                >
                  <Text>Users</Text>
                </MenuItem>
                <div className="flex flex-col gap-[59px] items-center justify-end mt-[51px] w-full">
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
            <div className="flex flex-1 flex-col gap-[15px] items-center justify-start md:px-5 w-full">
              <div className="bg-purple-800 h-[61px] rotate-[180deg] shadow-bs w-full"></div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[18px] rounded-[10px] w-[96%] md:w-full">
                <div className="flex flex-col gap-[15px] items-end justify-start mb-[23px] mt-[3px] w-full">
                  <div className="flex flex-col items-center justify-start w-[28%] md:w-full">
                    <Input
                      name="group604"
                      placeholder="Search"
                      value={group604value}
                      onChange={(e) => setGroup604value(e)}
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-[13px] text-gray-600 text-left w-full"
                      wrapClassName="bg-white-A700 border border-blue_gray-900 border-solid flex pl-4 pr-[13px] py-[7px] rounded-[5px] w-full"
                      suffix={
                        <div className="mt-0.5 mb-px ml-[35px] sm:w-full sm:mx-0 w-[7%] bg-gray-600">
                          {group604value?.length > 0 ? (
                            <CloseSVG
                              className="cursor-pointer my-auto"
                              onClick={() => setGroup604value("")}
                              fillColor="#828282"
                              height={17}
                              width={14}
                              viewBox="0 0 14 17"
                            />
                          ) : (
                            <Img
                              className="cursor-pointer my-auto"
                              src="images/img_search.svg"
                              alt="search"
                            />
                          )}
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="bg-gray-100_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[5px] rounded-[10px] w-full">
                      <Text
                        className="sm:mt-0 my-[9px] text-purple-800 text-sm"
                        size="txtPoppinsMedium14"
                      >
                        Users Name
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[183px] sm:mt-0 my-[9px] text-purple-800 text-sm"
                        size="txtPoppinsMedium14"
                      >
                        Phone
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[111px] sm:mt-0 my-[9px] text-purple-800 text-sm"
                        size="txtPoppinsMedium14"
                      >
                        Email
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[97px] sm:mt-0 my-[9px] text-purple-800 text-sm"
                        size="txtPoppinsMedium14"
                      >
                        Created On
                      </Text>
                      <Text
                        className="ml-16 sm:ml-[0] sm:mt-0 my-[9px] text-purple-800 text-right text-sm"
                        size="txtPoppinsMedium14"
                      >
                        Actions
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                      <List
                        className="flex flex-col gap-[35px] w-1/4"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseTwo"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseFive"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseSeven"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseFour"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseSix"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseEight"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseThree"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly my-0 w-full">
                          <Img
                            className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                            src="images/img_ellipse2.png"
                            alt="ellipseOne"
                          />
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Bienveru, Cheikh Diallo
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-col gap-[37px] items-center justify-start">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          +221 77 174 56 54
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[37px] items-center justify-start w-[34%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            10, Feb, 2023
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            12, Sep, 2023
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            16, Mar, 2023
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            10, Feb, 2023
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            12, Sep, 2023
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            16, Mar, 2023
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            10, Feb, 2023
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            info@email.com
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            16, Mar, 2023
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[8%] md:w-full">
                        <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                          <Img
                            className="h-[11px] md:h-auto object-cover"
                            src="images/img_group4939.png"
                            alt="group4939"
                          />
                          <List
                            className="flex flex-col gap-[49px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-start justify-between w-full">
                              <div className="bg-light_green-500 flex flex-col items-end justify-start pl-2.5 rounded">
                                <div className="bg-gradient  h-1.5 rounded-[50%] w-1.5"></div>
                              </div>
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                              <Img
                                className="h-[11px]"
                                src="images/img_delete.svg"
                                alt="delete"
                              />
                            </div>
                            <div className="flex flex-1 flex-row items-start justify-between w-full">
                              <div className="bg-light_green-500 flex flex-col items-end justify-start pl-2.5 rounded">
                                <div className="bg-gradient  h-1.5 rounded-[50%] w-1.5"></div>
                              </div>
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                              <Img
                                className="h-[11px]"
                                src="images/img_delete.svg"
                                alt="delete"
                              />
                            </div>
                          </List>
                          <Img
                            className="h-[11px] md:h-auto object-cover"
                            src="images/img_group4939.png"
                            alt="group4939_One"
                          />
                          <List
                            className="flex flex-col gap-[49px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-start justify-between w-full">
                              <div className="bg-light_green-500 flex flex-col items-end justify-start pl-2.5 rounded">
                                <div className="bg-gradient  h-1.5 rounded-[50%] w-1.5"></div>
                              </div>
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                              <Img
                                className="h-[11px]"
                                src="images/img_delete.svg"
                                alt="delete"
                              />
                            </div>
                            <div className="flex flex-1 flex-row items-start justify-between w-full">
                              <div className="bg-light_green-500 flex flex-col items-end justify-start pl-2.5 rounded">
                                <div className="bg-gradient  h-1.5 rounded-[50%] w-1.5"></div>
                              </div>
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                              <Img
                                className="h-[11px]"
                                src="images/img_delete.svg"
                                alt="delete"
                              />
                            </div>
                          </List>
                          <Img
                            className="h-[11px] md:h-auto object-cover"
                            src="images/img_group4939.png"
                            alt="group4939_Two"
                          />
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="bg-light_green-500 flex flex-col items-end justify-start pl-2.5 rounded">
                              <div className="bg-gradient  h-1.5 rounded-[50%] w-1.5"></div>
                            </div>
                            <Img
                              className="h-[11px] w-[11px]"
                              src="images/img_eye.svg"
                              alt="eye"
                            />
                            <Img
                              className="h-[11px]"
                              src="images/img_delete.svg"
                              alt="delete"
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
        </div>
      </div>
    </>
  );
};

export default UsersPage;
