import { Button } from "@mui/material";
import "./Home.scss";
import Appbar from "../../components/Appbar/Appbar";

const Home = () => {
  return (
    <div className="home">
      <Appbar />
      Home page.
      <Button color="primary">Hello World</Button>
    </div>
  );
};

export default Home;
