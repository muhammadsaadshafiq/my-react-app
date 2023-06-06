import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LogininPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-poppins h-[720px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_loginin.png')" }}
      >
        <div className="bg-blue_gray-900_a2 flex flex-col gap-[51px] items-center justify-end p-[79px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-row gap-3.5 items-center justify-center w-[22%] md:w-full">
            <Img
              className="h-[60px] w-[60px]"
              src="images/img_group1.svg"
              alt="groupOne"
            />
            <Text
              className="sm:text-[25px] md:text-[27px] text-[29px] text-white-A700"
              size="txtPoppinsBold29"
            >
              Kalpay
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[21px] items-center justify-end mb-[111px] p-[15px] md:px-5 rounded-[15px] w-[48%] md:w-full">
            <Text
              className="mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center tracking-[-0.50px]"
              size="txtPoppinsBold25"
            >
              Login
            </Text>
            <div className="flex flex-col gap-[15px] items-center justify-start w-[97%] md:w-full">
              <Input
                name="groupTwenty"
                placeholder="Email"
                className="leading-[normal] p-0 placeholder:text-blue_gray-900 sm:px-5 text-[15px] text-blue_gray-900 text-left w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-900 border-solid flex pl-[21px] pr-[35px] py-[13px] rounded-[5px] w-full"
                type="email"
                prefix={
                  <div className="mr-[18px] sm:w-full sm:mx-0 w-[6%] bg-gray-500 my-px">
                    <Img
                      className="my-auto"
                      src="images/img_mail.svg"
                      alt="mail"
                    />
                  </div>
                }
              ></Input>
              <Input
                name="groupNineteen"
                placeholder="Password"
                className="leading-[normal] p-0 placeholder:text-blue_gray-900 sm:px-5 text-[15px] text-blue_gray-900 text-left w-full"
                wrapClassName="bg-white-A700 flex outline outline-[0.5px] outline-blue_gray-900 pl-[21px] pr-[35px] py-[13px] rounded-[5px] w-full"
                type="password"
                prefix={
                  <div className="mt-1.5 mb-[5px] mr-[18px] sm:w-full sm:mx-0 w-[6%] bg-gray-500">
                    <Img
                      className="my-auto"
                      src="images/img_map.svg"
                      alt="map"
                    />
                  </div>
                }
              ></Input>
              <Button
                className="common-pointer bg-purple-800 cursor-pointer leading-[normal] min-w-[369px] py-[13px] rounded-[25px] text-[15px] text-center text-white-A700"
                onClick={() => navigate("/dashboard")}
              >
                Login
              </Button>
              <a className="text-[15px] text-purple-800">
                <Text
                  className="common-pointer"
                  size="txtPoppinsRegular15"
                  onClick={() => navigate("/loginone")}
                >
                  Forgot Password?
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogininPage;
