import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const allOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReportsPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const [grouptenvalue, setGrouptenvalue] = React.useState("");

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
                    "margin-top": "51px",
                    "padding-left": "8px",
                    "padding-right": "7px",
                    gap: "15px",
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
                className="flex flex-col items-center justify-start mb-[198px] mt-[5px] pt-[7px] px-3.5 w-[85%]"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-[35px]"
                      src="images/img_maximize_1.svg"
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
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px] mt-[63px]"
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
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px] mt-[59px]"
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
                </div>
                <MenuItem
                  icon={
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_edit_white_a700.svg"
                      alt="edit"
                    />
                  }
                  active={window.location.pathname === "/reports"}
                  href="/reports"
                >
                  <Text>Reports</Text>
                </MenuItem>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px] mt-[51px]"
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
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[15px] items-center justify-start md:px-5 w-full">
              <div className="bg-purple-800 h-[61px] rotate-[180deg] shadow-bs w-full"></div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[18px] rounded-[10px] w-[96%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mb-[21px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-gray-100_01 border border-blue_gray-300 border-solid flex flex-col font-tajawal items-center justify-end p-[11px] rounded-[19px] shadow-bs3">
                      <div className="flex flex-row gap-7 items-start justify-between w-[93%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-xs"
                          size="txtTajawalRegular12"
                        >
                          10/15/2021
                        </Text>
                        <Img
                          className="h-3.5 w-[13px]"
                          src="images/img_calendar_blue_gray_900.svg"
                          alt="calendar"
                        />
                      </div>
                    </div>
                    <Text
                      className="text-base text-blue_gray-900 text-center"
                      size="txtPoppinsMedium16"
                    >
                      To
                    </Text>
                    <div className="bg-gray-100_01 border border-blue_gray-300 border-solid flex flex-col font-tajawal items-center justify-end p-[11px] rounded-[19px] shadow-bs3">
                      <div className="flex flex-row gap-7 items-start justify-between w-[93%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-xs"
                          size="txtTajawalRegular12"
                        >
                          10/15/2021
                        </Text>
                        <Img
                          className="h-3.5 w-[13px]"
                          src="images/img_calendar_blue_gray_900.svg"
                          alt="calendar_One"
                        />
                      </div>
                    </div>
                    <SelectBox
                      className="bg-gray-100_01 border border-blue_gray-300 border-solid md:flex-1 font-poppins pb-[7px] pt-2.5 px-[15px] rounded-[19px] shadow-bs3 text-[13px] text-blue_gray-900 text-left w-[16%] md:w-full"
                      placeholderClassName="text-blue_gray-900"
                      indicator={
                        <Img
                          className="h-3.5 mr-[0] w-[11px]"
                          src="images/img_arrowdown_blue_gray_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupNine"
                      options={allOptionsList}
                      isSearchable={false}
                      placeholder="All"
                    />
                    <Input
                      name="groupTen"
                      placeholder="Search..."
                      value={grouptenvalue}
                      onChange={(e) => setGrouptenvalue(e)}
                      className="font-tajawal p-0 placeholder:text-blue_gray-900 sm:pr-5 text-blue_gray-900 text-left text-xs w-full"
                      wrapClassName="bg-gray-100_01 border border-blue_gray-300 border-solid flex md:flex-1 pl-3.5 pr-[35px] py-[11px] rounded-[19px] shadow-bs3 md:w-full"
                      prefix={
                        <div className="mb-px mr-[9px] bg-blue_gray-900">
                          <Img
                            className="cursor-pointer my-auto"
                            src="images/img_search_blue_gray_900.svg"
                            alt="search"
                          />
                        </div>
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#2e2e2e"
                          className="cursor-pointer my-auto"
                          onClick={() => setGrouptenvalue("")}
                          style={{
                            visibility:
                              grouptenvalue?.length <= 0 ? "hidden" : "visible",
                          }}
                          height={14}
                          width={12}
                          viewBox="0 0 12 14"
                        />
                      }
                    ></Input>
                    <Button
                      className="bg-purple-500 border border-blue_gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[120px] px-[15px] py-2.5 rounded-[19px] shadow-bs3"
                      leftIcon={
                        <div className="mr-3.5 bg-white-A700 my-px">
                          <Img src="images/img_download.svg" alt="download" />
                        </div>
                      }
                    >
                      <div className="font-bold font-tajawal text-center text-sm text-white-A700">
                        Download
                      </div>
                    </Button>
                  </div>
                  <div className="bg-gray-100_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                    <Text
                      className="sm:mt-0 my-2.5 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      User Name
                    </Text>
                    <Text
                      className="mb-2 sm:ml-[0] ml-[42px] sm:mt-0 mt-3 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      User Type
                    </Text>
                    <Text
                      className="ml-10 sm:ml-[0] sm:mt-0 my-2.5 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Transaction
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[62px] sm:mt-0 my-2.5 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Status
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[60px] sm:mt-0 my-2.5 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Amount
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[37px] sm:mt-0 my-2.5 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Created On
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[49px] sm:mt-0 my-2.5 text-purple-800 text-right text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Actions
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[5px] w-[26%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Jean Louis
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Consumer
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-11 w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Jean Louis
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Consumer
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[46px] w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Jean Louis
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Consumer
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[46px] w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Jean Louis
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Consumer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[59px] items-start justify-start mt-[46px] w-[92%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Jean Louis
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Agent
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[66px] items-start justify-start mt-[43px] w-[92%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Alex John
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Agent
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[66px] items-start justify-start mt-[43px] w-[92%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Alex John
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Agent
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[66px] items-start justify-start mt-[43px] w-[92%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Alex John
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Agent
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[57px] md:mt-0 mt-[5px]">
                      <Text
                        className="ml-1.5 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Utility
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] mt-[41px] text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Utility
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] mt-[43px] text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Utility
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] mt-[43px] text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Utility
                      </Text>
                      <Text
                        className="mt-11 text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Top Up
                      </Text>
                      <Text
                        className="mt-11 text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Top Up
                      </Text>
                      <Text
                        className="mt-11 text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Top Up
                      </Text>
                      <Text
                        className="mt-11 text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Top Up
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[47px] items-center justify-start ml-14 md:ml-[0] md:mt-0 mt-[5px] w-[13%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[82%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Successful
                        </Text>
                        <Img
                          className="h-px md:ml-[0] ml-[72px] mt-1.5 w-px"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                        <Text
                          className="mt-[38px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Successful
                        </Text>
                        <Text
                          className="mt-[46px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Successful
                        </Text>
                        <Text
                          className="mt-[46px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Successful
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Unsuccessful
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Unsuccessful
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Unsuccessful
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Unsuccessful
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[37px] items-center justify-start md:ml-[0] ml-[38px]">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $25,000
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $25,000
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $25,000
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $25,000
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $36,000
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $36,000
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $36,000
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        $36,000
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[57px] items-center justify-start md:ml-[0] ml-[17px] md:mt-0 mt-[25px] w-[1%] md:w-full">
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_One"
                      />
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_Two"
                      />
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_Three"
                      />
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_Four"
                      />
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_Five"
                      />
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_Six"
                      />
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_Seven"
                      />
                      <Img
                        className="h-px w-px"
                        src="images/img_vector.svg"
                        alt="vector_Eight"
                      />
                    </div>
                    <div className="flex flex-col gap-[33px] items-center justify-start ml-5 md:ml-[0] w-[24%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          10, Feb, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img src="images/img_eye_white_a700.svg" alt="eye" />
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          12, Sep, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            alt="eye_One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          16, Mar, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            alt="eye_Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          10, Feb, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            alt="eye_Three"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          12, Sep, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            alt="eye_Four"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          16, Mar, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            alt="eye_Five"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          10, Feb, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            alt="eye_Six"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          16, Mar, 2023
                        </Text>
                        <Button className="bg-teal-700 flex h-[25px] items-center justify-center p-1.5 rounded-[5px] w-[25px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            alt="eye_Seven"
                          />
                        </Button>
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

export default ReportsPage;
