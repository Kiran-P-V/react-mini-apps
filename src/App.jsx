import "./App.css";
// import { Input, createTheme } from "@mui/material";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
// import Store from "./store";

const App = () => {
  // const theme = createTheme({});
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
