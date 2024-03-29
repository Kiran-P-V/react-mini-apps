import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";

const data = {
  menuData: [
    {
      id: "1",
      name: "Todo List",
      icon: <FormatListNumberedRtlIcon />,
      link: "/to-do-list",
    },
    {
      id: "2",
      name: "Calculator",
      icon: <CalculateRoundedIcon />,
      link: "/calculator",
    },
    {
      id: "3",
      name: "StopWatch",
      icon: <TimerRoundedIcon />,
      link: "/",
    },
  ],
};

export default data;
