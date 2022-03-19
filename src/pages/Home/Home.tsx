import { Button } from "@mui/material";
import "./Home.scss";
import Appbar from "../../components/Appbar/Appbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

const Home = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false);

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  return (
    <div className="home">
      <Appbar onClick={handleDrawerState} />
      <Sidebar drawerState={drawerState} onClick={handleDrawerState} />
      Home page.
      <Button color="primary">Hello World</Button>
    </div>
  );
};

export default Home;
