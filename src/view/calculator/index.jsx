import { Grid } from "@mui/material";
import React, { useState } from "react";
import data from "./data";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [isEqualClicked, setIsEqualClicked] = useState(false);

  const handleClick = (newValue) => {
    if (newValue !== "=") {
      setIsEqualClicked(false);
      setValue((prevValue) => prevValue + newValue);
    }
  };

  const handleClickAction = (action) => {
    if (action === "=") {
      try {
        setResult(eval(value));
        setIsEqualClicked(true);
      } catch (error) {
        setResult("Error");
      }
    } else {
      setValue((prevValue) => prevValue + action);
    }
  };

  const tailwindStyles = {
    width: "tw-w-16",
    zeroWidth: "tw-w-32",
    slate: "tw-bg-slate-400",
    orange: "tw-bg-orange-400",
    gray: "tw-bg-gray-700",
    textWhite: "tw-text-white",
    textBlack: "tw-text-black",
  };

  return (
    <>
      <div className="tw-bg-black tw-h-[85vh] tw-w-[325px] tw-rounded-3xl tw-border tw-border-black">
        <div className="tw-h-[35%] tw-w-full tw-bg-gray-900 tw-rounded-3xl tw-flex tw-justify-end tw-items-end tw-text-5xl tw-p-6 tw-text-white ">
          {isEqualClicked ? result : value}
        </div>
        <div className="tw-h-[65%] tw-w-full tw-rounded-3xl tw-p-3 flex">
          <Grid container className="tw-flex tw-justify-center" spacing={1}>
            {data?.mainData?.map((item, index) => (
              <Grid item key={index}>
                <div
                  className={`tw-rounded-full tw-w-${
                    item?.type === "zero" ? 32 : 16
                  } tw-h-16 tw-bg-${
                    item?.color
                  } tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-font-medium tw-text-3xl tw-cursor-pointer tw-text-${
                    item?.textColor
                  }`}
                  onClick={() =>
                    item?.type === "action"
                      ? handleClickAction(item?.value)
                      : handleClick(item?.value)
                  }
                >
                  {item?.icon || item?.value}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Calculator;
