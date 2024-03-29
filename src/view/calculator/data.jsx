import { BsPlusSlashMinus } from "react-icons/bs";
import { FaDivide } from "react-icons/fa6";
import { RxDividerHorizontal } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { TiEquals } from "react-icons/ti";
import { LuX } from "react-icons/lu";

const data = {
  mainData: [
    {
      id: 1,
      type: "action",
      color: "slate-400",
      value: "AC",
      textColor: "black",
    },
    {
      id: 2,
      icon: <BsPlusSlashMinus />,
      type: "action",
      color: "slate-400",
      value: "/",
      textColor: "black",
    },
    {
      id: 3,
      //   icon: <AccessAlarmIcon />,
      type: "action",
      color: "slate-400",
      value: "%",
      textColor: "black",
    },
    {
      id: 4,
      icon: <FaDivide />,
      type: "action",
      color: "orange-400",
      value: "/",
      textColor: "white",
    },
    {
      id: 5,
      type: "number",
      color: "gray-700",
      value: 7,
      textColor: "white",
    },
    {
      id: 6,
      type: "number",
      color: "gray-700",
      value: 8,
      textColor: "white",
    },
    {
      id: 7,
      type: "number",
      color: "gray-700",
      value: 9,
      textColor: "white",
    },
    {
      id: 8,
      icon: <LuX />,
      type: "number",
      color: "orange-400",
      value: "*",
      textColor: "white",
    },
    {
      id: 9,
      type: "number",
      color: "gray-700",
      value: 4,
      textColor: "white",
    },
    {
      id: 10,
      type: "number",
      color: "gray-700",
      value: 5,
      textColor: "white",
    },
    {
      id: 11,
      type: "number",
      color: "gray-700",
      value: 6,
      textColor: "white",
    },
    {
      id: 12,
      icon: <RxDividerHorizontal />,
      type: "action",
      color: "orange-400",
      value: "-",
      textColor: "white",
    },
    {
      id: 13,
      type: "number",
      color: "gray-700",
      value: 1,
      textColor: "white",
    },
    {
      id: 14,
      type: "number",
      color: "gray-700",
      value: 2,
      textColor: "white",
    },
    {
      id: 15,
      type: "number",
      color: "gray-700",
      value: 3,
      textColor: "white",
    },
    {
      id: 16,
      icon: <FaPlus />,
      type: "action",
      color: "orange-400",
      value: "+",
      textColor: "white",
    },
    {
      id: 17,
      type: "zero",
      color: "gray-700",
      value: 0,
      textColor: "white",
    },
    {
      id: 18,
      type: "action",
      color: "gray-700",
      value: ".",
      textColor: "white",
    },
    {
      id: 19,
      icon: <TiEquals />,
      type: "action",
      color: "orange-400",
      value: "=",
      textColor: "white",
    },
  ],
};

export default data;
