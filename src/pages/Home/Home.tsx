import "./Home.scss";
import Appbar from "../../components/Appbar/Appbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import CountryList from "../../components/CountryList/CountryList";
import { useCallback } from "react";
import { fetchAllCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [drawerState, setDrawerState] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

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
