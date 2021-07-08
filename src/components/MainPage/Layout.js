import {
  CssBaseline, Drawer, List,
  ListItem,
  ListItemIcon,
  ListItemText, makeStyles, Typography
} from "@material-ui/core";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import HomeIcon from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme)=> {
  return {
    page: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/DungeonEntrance.jpg'})`,
      minHeight: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/welcome.png'})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundColor: "#B0B4B060",
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#F7D44E",
    },
    title: {
      padding: theme.spacing(2),
      backgroundColor: "black",
      color: "white",
      textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
    }
  }
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Classes",
      icon: <SubjectIcon color="secondary" />,
      path: "/classes",
    },
    {
      text: "Races",
      icon: <SubjectIcon color="secondary" />,
      path: "/races",
    },
    {
      text: "Create your character",
      icon: <AccessibilityIcon color="secondary" />,
      path: "/simulate",
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h6" color="primary" className={classes.title}>Dungeons & Dragons</Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
