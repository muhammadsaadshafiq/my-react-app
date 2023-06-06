import React from "react";

const sizeClasses = {
  txtPoppinsBold15: "font-bold font-poppins",
  txtPoppinsBold29: "font-bold font-poppins",
  txtTajawalRegular12: "font-normal font-tajawal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsBold22: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsBold25: "font-bold font-poppins",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsRegular7: "font-normal font-poppins",
  txtPoppinsRegular15Black900: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
