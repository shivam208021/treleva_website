import React from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HolidayIcon from "@mui/icons-material/LocalPlay";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import Home from "./Home";
import HolidayListUpload from "../../components/holiday/HolidayListUpload";
import TrelevaLogo from './TrelevaLogo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from "@mui/icons-material/Speed";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    ...(open ? openedMixin(theme) : closedMixin(theme)),
    backdropFilter: open ? "blur(5px)" : "none",
  },
}));

const BoxMain = styled(Box)(({ open }) => ({
  flexGrow: 1,
  p: 3,
  filter: open ? "blur(5px)" : "none",
  transition: "filter 0.3s",
}));

const SideNavigation = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [employeeOpen, setEmployeeOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleEmployeeClick = () => {
    setEmployeeOpen(!employeeOpen);
  };

  const handleAccountIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("treleva_token");
    navigate("/login");
  
    // Close the account menu
    handleAccountMenuClose();
  };
  
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const token = localStorage.getItem("treleva_token");
  const userData = token ? parseJwt(token) : null;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          elevation={4}
          sx={{
            backgroundColor: "#333",
            color: "#FFF",
            opacity: 1,
            marginLeft: open ? drawerWidth : 0,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "inline-flex" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <img
                src={TrelevaLogo}
                alt="Logo"
                style={{ width: "120px", marginRight: "10px" }}
              />
            </Typography>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
             <Typography variant="body2" sx={{ marginRight: 2, color: "#FFF" }}>
              {userData ? userData.TR_EMP_EMAIL : ""}
            </Typography> 
              <IconButton
                color="inherit"
                onClick={handleAccountIconClick}
                sx={{ marginRight: 5, fontSize: 32 }}               >
                <AccountCircleIcon sx={{ fontSize: 42 }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAccountMenuClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                
                <MenuItem>
                <Typography variant="body2" sx={{ marginRight: 2 }}>
              {userData ? userData.TR_EMP_EMAIL : ""}
            </Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ marginRight: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              component={Link}
              to="/user/holiday"
              onClick={() => navigate("/user/holiday")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HolidayIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Holiday"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleEmployeeClick}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {employeeOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                </ListItemIcon>
                <ListItemText
                  primary="Employee"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <Collapse in={employeeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  component={Link}
                  to="/user/CreateTask"
                  onClick={() => navigate("/user/CreateTask")}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <EditNoteIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="CreateTask"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem> */}
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  component={Link}
                  to="/user/TimesheetView"
                  onClick={() => navigate("/user/TimesheetView")}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <PunchClockIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="TimesheetView"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
        </Drawer>
        <BoxMain component="main" sx={{ flexGrow: 1, p: 3 }} open={open}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="holiday" element={<HolidayListUpload />} />
            {/* <Route path="CreateTask" element={<CreateTask />} />
            <Route path="TimesheetView" element={<TimesheetView />} /> */}
          </Routes>
        </BoxMain>
      </Box>
    </>
  );
};

export default SideNavigation;
