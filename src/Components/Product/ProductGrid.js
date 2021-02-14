import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";
import {
  Grid,
  CardMedia,
  Box,
  Card,
  CardContent,
  Divider,
  Button,
  Typography
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { withStyles } from "@material-ui/core/styles";
import ButtonSuccess from "../../Core/ButtonSuccess";
import ButtonError from "../../Core/ButtonError";

const styles = theme => ({
  card: {
    "&:hover": {
      boxShadow: `0px 0px 5px ${theme.palette.grey[800]}`
    }
  },
  title: {
    textDecoration: "none",
    fontSize: "20px",
    color: theme.palette.grey[800],
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  price: {
    color: theme.palette.error.main
  },
  btnAddToCart: {
    marginTop: theme.spacing(1),
    borderRadius: 99,
    textTransform: "none",
    color: theme.palette.common.white,
    background: theme.palette.error.main,
    "&:hover": {
      color: theme.palette.common.white,
      background: theme.palette.error.main
    }
  },
  imgProduct: {
    margin: "0 auto"
    // width: "80%",
    // height: "80%"
  }
});
class ProductGrid extends Component {
  render() {
    const { id, title, img, price, inCart, star } = this.props.product;
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4} {...this.props.gridOveriew}>
        <ProductConsumer>
          {value => (
            <React.Fragment>
              <Card className={classes.card} style={{ height: "100%" }}>
                <Box onClick={() => value.handleDetail(id)}>
                  <Link to="/detail">
                    <CardMedia
                      component="img"
                      image={img}
                      className={classes.imgProduct}
                    />
                  </Link>
                </Box>
                <CardContent className={classes.cardCT}>
                  <Box mb={1} onClick={() => value.handleDetail(id)}>
                    <Link to="/detail" className={classes.title}>
                      <b>{title}</b>
                    </Link>
                    <Box>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        Price:&nbsp;
                      </Typography>
                      <Typography component="span" className={classes.price}>
                        <b>${price}</b>
                      </Typography>
                    </Box>
                    <Box>
                      <Rating name="read-only" value={star} readOnly />
                    </Box>
                  </Box>
                  <Divider />
                  <Grid container justify="space-between">
                    <Grid item>
                      <Box my={1}>
                        <ButtonSuccess endIcon={<CheckOutlinedIcon />}>
                          Đổi trả 7 ngày
                        </ButtonSuccess>
                      </Box>
                      <ButtonError
                        variant="outlined"
                        endIcon={<FavoriteBorderOutlinedIcon />}
                      >
                        Trả góp 0%
                      </ButtonError>
                    </Grid>
                    <Grid item>
                      <Button
                        endIcon={inCart ? "" : <ShoppingCartOutlinedIcon />}
                        className={classes.btnAddToCart}
                        variant="contained"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        {inCart ? "Incart" : "Add"}
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </React.Fragment>
          )}
        </ProductConsumer>
      </Grid>
    );
  }
}

ProductGrid.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired,
  gridOveriew: PropTypes.object
};

export default withStyles(styles)(ProductGrid);
