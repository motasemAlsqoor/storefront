import React from "react";
import { connect } from "react-redux";
import { changeActiveCategory } from "../store/categories";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Categories(props) {
  
  const classes = useStyles();
  return (
    <>
      <h1>Browse Our Categories</h1>
      <div className={classes.root}>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          {props.categories.map((category) => {
            return (
              <Button
                onClick={() =>
                  props.changeActiveCategory(category.normalizedName)
                }
              >
                {category.displayName}
              </Button>
            );
          })}
        </ButtonGroup>
        <div className="categoryDetails">
          <h1>{props.active.displayName}</h1>
          <p>{props.active.description}</p>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const active = state.categories.categories.filter(
    (category) => category.normalizedName == state.categories.active
  )[0];
  console.log(active);
  return { categories: state.categories.categories, active: active };
};
const mapDispatchToProps = { changeActiveCategory };
// the order of (mapStateToProps,mapDispatchToProps have to be the same
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
