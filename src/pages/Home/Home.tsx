import "./Home.scss";
import Appbar from "../../components/Appbar/Appbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
import CountryList from "../../components/CountryList/CountryList";
import { useCallback } from "react";

const Home = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false);

  const handleDrawerState = useCallback((state: boolean) => {
    setDrawerState(state);
  }, []);

  return (
    <div className="home">
      <Appbar onClick={handleDrawerState} />
      <Sidebar drawerState={drawerState} onClick={handleDrawerState} />
      <CountryList />
    </div>
  );
};

export default Home;
