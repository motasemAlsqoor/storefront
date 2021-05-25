import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";

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
  cart: {
    alignSelf: "flex-end",
  },
}));
export default function Header() {
  const state = useSelector((state) => {
    return {
      count: state.cart.length,
    };
  });
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Our Store
        </Typography>
        <Typography variant="h6" className={classes.cart}>
          Cart {state.count}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
