import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Drawer,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const drawerWidth = 240;

const useStyles = makeStyles((theme)=> {
  return {
    page: {
      background: "#4EA8DE",
      width: "100%",
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2)
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
      text: "Class-related Info",
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
