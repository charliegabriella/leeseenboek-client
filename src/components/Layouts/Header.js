import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        {" "}
        <Typography variant="h6" color="secondary" className={classes.title}>
          LEES EEN BOEK
        </Typography>
        <Button
          color="inherit"
          color="secondary"
          component={Link}
          raised
          to="/"
        >
          Home
        </Button>
        <Button
          color="inherit"
          color="secondary"
          component={Link}
          raised
          to="/login"
        >
          Login
        </Button>
        <Button
          color="inherit"
          color="secondary"
          component={Link}
          raised
          to="/signup"
        >
          Sign Up
        </Button>
        <Button
          color="inherit"
          color="secondary"
          component={Link}
          raised
          to="/profilepage"
        >
          Profile
        </Button>
        <Button
          color="inherit"
          color="secondary"
          component={Link}
          raised
          to="/about"
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}
