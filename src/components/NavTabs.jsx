import React, { useState } from "react";

const NavTabs = () => {
  const tabsData = [
    {
      heading: "One",
      para: "One",
    },
    {
      heading: "Two",
      para: "Two",
    },
    {
      heading: "Three",
      para: "Three",
    },
    {
      heading: "Four",
      para: "Four",
    },
    {
      heading: "Five",
      para: "Five",
    },
  ];
  const [value, setValue] = useState(tabsData[0]);
  console.log(value, "value");

  return (
    <>
      <div className="text-center mt-5 pt-5">
        {tabsData.map((val, index) => {
          return (
            <button
              key={index}
              className={`${
                val.para == value.para
                  ? "bg-success text-white"
                  : "bg-info text-success"
              } ms-3 fs-3 fw-bold border-0 py-2 px-5`}
              onClick={() => setValue(val)}
            >
              {val.heading}
            </button>
          );
        })}
        <p className="pt-5 fs-1 fw-semibold text-primary">{value.para}</p>
      </div>
    </>
  );
};

export default NavTabs;
