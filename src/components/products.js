import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  const classes = useStyles();
  return (
    <>
      <div className="products-container">
        {props.products.map((product) => {
          return (
            <div className="product">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
                <Button size="small" color="primary">
                  View details
                </Button>
              </CardActions>
            </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  const active=state.categories.active;
  const products=state.products.products.filter(product=>product.category==active)
  return { products: products };
};

// the order of (mapStateToProps,mapDispatchToProps have to be the same
export default connect(mapStateToProps)(Products);
