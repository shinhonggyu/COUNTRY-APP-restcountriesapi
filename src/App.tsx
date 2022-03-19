import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "./styles/_base.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f2aa26",
      dark: "#f09c01",
    },
    secondary: {
      main: "#11cb5f",
    },
    text: {
      primary: "#373585",
      secondary: "#a4a6b3",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:name" element={<Country />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
