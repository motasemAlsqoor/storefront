import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/cart";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "10%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    right: 0,
  },
}));
export default function Cart(props) {
  // this will replace mapStateToProps
  const state = useSelector((state) => {
    return {
      items: state.cart,
    };
  });

  // ~ mapDispatchToProps
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {state.items.map((item) => {
          return (
            <>
              <ListItem button>
                <ListItemIcon onClick={() => dispatch(deleteItem(item.id))}>
                  <DeleteOutlined />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </>
          );
        })}
      </List>
    </div>
  );
}
