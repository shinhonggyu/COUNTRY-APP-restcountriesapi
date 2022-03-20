import "./sidebar.scss";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

interface SidebarProps {
  onClick: Function;
  drawerState: boolean;
}

const Sidebar = ({ onClick, drawerState }: SidebarProps) => {
  const onDrawerClose = () => {
    onClick(!drawerState);
  };

  return (
    <div className="sidebar">
      {/* {Drawer} */}
      <Drawer
        className="sidebar__drawer"
        anchor="right"
        open={drawerState}
        onClose={onDrawerClose}
      >
        <div className="sidebar__drawer-content">
          <CloseIcon className="closeIcon" onClick={onDrawerClose} />
          <div className="sidebar__navigation">
            <h2>Themes</h2>
            <ul>
              <li>
                <h2>Blue</h2>
                <span className="sidebar__color-box blue"></span>
              </li>
              <li>
                <h2>Yellow</h2>
                <span className="sidebar__color-box green"></span>
              </li>
              <li>
                <h2>Green</h2>
                <span className="sidebar__color-box red"></span>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
