import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";
import { Grid, Box, Card, Button, Typography, Hidden } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { withStyles } from "@material-ui/core/styles";
import ButtonSuccess from "../../Core/ButtonSuccess";
import ButtonError from "../../Core/ButtonError";
import { CardImg46 } from "../../Core/CardImg46";

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
  textInfo: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 3
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
    margin: "0 auto",
    height: "80%",
    width: "80%"
  }
});
class ProductList extends Component {
  render() {
    const { id, title, img, price, inCart, star, info } = this.props.product;
    const { classes } = this.props;
    return (
      <Grid item xs={12}>
        <ProductConsumer>
          {value => (
            <Card className={classes.card} style={{ height: "100%" }}>
              <Grid container style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Grid item xs={12} md={9}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                      <Box onClick={() => value.handleDetail(id)}>
                        <Link to="/detail">
                          <CardImg46
                            // component="img"
                            image={img}
                            className={classes.imgProduct}
                          />
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={8}>
                      <Box mb={1} onClick={() => value.handleDetail(id)}>
                        <Link to="/detail" className={classes.title}>
                          <b>{title}</b>
                        </Link>
                        <Box>
                          <Rating name="read-only" value={star} readOnly />
                        </Box>
                        <Typography
                          color="textSecondary"
                          className={classes.textInfo}
                        >
                          {info}
                        </Typography>

                        <Hidden xsDown>
                          <Box mt={1}>
                            <ButtonSuccess endIcon={<CheckOutlinedIcon />}>
                              Đổi trả 7 ngày
                            </ButtonSuccess>
                            &nbsp;&nbsp;
                            <ButtonError
                              variant="outlined"
                              endIcon={<FavoriteBorderOutlinedIcon />}
                            >
                              Trả góp 0%
                            </ButtonError>
                          </Box>
                        </Hidden>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box textAlign="right" mr={2}>
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
                  </Box>
                </Grid>
              </Grid>
            </Card>
          )}
        </ProductConsumer>
      </Grid>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default withStyles(styles)(ProductList);
