import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const BusinessPage = () => {
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
                    "margin-top": "51px",
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-[35px]"
                      src="images/img_maximize_purple_800_35x152.svg"
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
                      <div className="mr-[11px] bg-blue_gray-900 my-px">
                        <Img src="images/img_user.svg" alt="user" />
                      </div>
                    }
                  >
                    <div className="text-[13px] text-blue_gray-900 text-left">
                      Users
                    </div>
                  </Button>
                </div>
                <MenuItem
                  icon={
                    <Img
                      className="h-[17px]"
                      src="images/img_bag_white_a700.svg"
                      alt="bag"
                    />
                  }
                  active={window.location.pathname === "/business"}
                  href="/business"
                >
                  <Text>Business</Text>
                </MenuItem>
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-end mt-[52px] w-full">
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
              <div className="bg-white-A700 md:h-[490px] h-[618px] sm:h-[999px] p-[18px] relative rounded-[10px] w-[96%] md:w-full">
                <div className="absolute bottom-[6%] flex flex-col inset-x-[0] mx-auto w-[96%] md:w-full">
                  <div className="bg-gray-100_01 flex flex-row sm:gap-10 items-center justify-between mx-auto p-1 rounded-[10px] w-full">
                    <Text
                      className="my-2.5 text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Business Name
                    </Text>
                    <Text
                      className="mr-1 my-2.5 text-purple-800 text-right text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Actions
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between ml-auto mr-[5px] mt-[-NaNpx] w-[43%] z-[1]">
                    <div className="flex flex-col gap-[57px] items-end justify-start mt-[18px] w-[38%]">
                      <div className="flex flex-row items-center justify-between w-full">
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
                      <div className="flex flex-col gap-[59px] items-center justify-start w-[1%] md:w-full">
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
                    </div>
                    <div className="flex flex-col gap-[47px] items-center justify-start mb-[7px] w-[18%]">
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4987"
                      />
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4988"
                      />
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4989"
                      />
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4990"
                      />
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4991"
                      />
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4992"
                      />
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4993"
                      />
                      <Img
                        className="h-[11px] md:h-auto object-cover"
                        src="images/img_group4939.png"
                        alt="group4994"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[3px] ml-11 mt-[-NaNpx] z-[1]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                    <Text
                      className="mt-[41px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                    <Text
                      className="mt-[43px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                    <Text
                      className="mt-[43px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                    <Text
                      className="mt-[43px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                    <Text
                      className="mt-[43px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                    <Text
                      className="mt-[43px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                    <Text
                      className="mt-[43px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Liga Transport
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start mb-auto ml-52 mt-[-34.05px] w-[13%] z-[1]">
                    <Text
                      className="text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Business Type
                    </Text>
                    <div className="flex flex-col gap-[43px] items-center justify-start">
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Transport
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[7%] flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[18%] w-[56%]">
                  <Img
                    className="h-1.5 sm:mt-0 mt-[380px]"
                    src="images/img_brightness.svg"
                    alt="brightness"
                  />
                  <div className="flex flex-col gap-[33px] items-center justify-start sm:ml-[0] ml-[132px] w-[26%] sm:w-full">
                    <Text
                      className="text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Email
                    </Text>
                    <div className="flex flex-col gap-[43px] items-center justify-start w-full">
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
                        info@email.com
                      </Text>
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
                        info@email.com
                      </Text>
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
                        info@email.com
                      </Text>
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
                        info@email.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[30px] items-center justify-start sm:ml-[0] ml-[66px] w-[27%] sm:w-full">
                    <Text
                      className="text-purple-800 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Phone No
                    </Text>
                    <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14"
                      >
                        +221 77 987 87 90
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[15%] flex flex-col items-center justify-start left-[3%] w-[4%]">
                  <Button className="bg-white-A700 flex h-8 items-center justify-center p-1 rounded-[50%] shadow-bs2 w-8">
                    <Img src="images/img_group5244.png" alt="group5244" />
                  </Button>
                  <Button className="bg-white-A700 flex h-8 items-center justify-center mt-[31px] p-1 rounded-[50%] shadow-bs2 w-8">
                    <Img src="images/img_group5244.png" alt="group5245" />
                  </Button>
                  <Button className="bg-white-A700 flex h-8 items-center justify-center mt-7 p-1 rounded-[50%] shadow-bs2 w-8">
                    <Img src="images/img_group5244.png" alt="group5246" />
                  </Button>
                  <Button className="bg-white-A700 flex h-8 items-center justify-center mt-7 p-1 rounded-[50%] shadow-bs2 w-8">
                    <Img src="images/img_group5244.png" alt="group5247" />
                  </Button>
                  <Button className="bg-white-A700 flex h-8 items-center justify-center mt-7 p-1 rounded-[50%] shadow-bs2 w-8">
                    <Img src="images/img_group5244.png" alt="group5248" />
                  </Button>
                  <Button className="bg-white-A700 flex h-8 items-center justify-center mt-7 p-1 rounded-[50%] shadow-bs2 w-8">
                    <Img src="images/img_group5244.png" alt="group5249" />
                  </Button>
                  <Button className="bg-white-A700 flex h-8 items-center justify-center mt-7 p-1 rounded-[50%] shadow-bs2 w-8">
                    <Img src="images/img_group5244.png" alt="group5250" />
                  </Button>
                </div>
                <Button className="absolute bg-white-A700 bottom-[5%] flex h-8 items-center justify-center left-[3%] p-1 rounded-[50%] shadow-bs2 w-8">
                  <Img src="images/img_group5244.png" alt="group5251" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessPage;
