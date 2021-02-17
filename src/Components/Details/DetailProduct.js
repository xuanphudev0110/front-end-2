import React from "react";
import Rating from "@material-ui/lab/Rating";
import {
  Typography,
  Box,
  Divider,
  Grid,
  CardMedia,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { withStyles } from "@material-ui/core/styles";
import SecurityIcon from "@material-ui/icons/Security";
import DiscFullIcon from "@material-ui/icons/DiscFull";
import { ProductConsumer } from "../../Context";

const styles = theme => ({
  cardImg: {
    width: "90%",
    margin: "0 auto"
  },
  colorICon: {
    fontSize: "40px",
    fill: `red`
  },
  installment: {
    textTransform: "none",
    marginRight: 16,
    color: theme.palette.common.white,
    background: theme.palette.success.main,
    "&:hover": {
      color: theme.palette.common.white,
      background: theme.palette.success.main
    }
  },
  btnAddToCart: {
    textTransform: "none",
    color: theme.palette.common.white,
    background: theme.palette.error.main,
    "&:hover": {
      color: theme.palette.common.white,
      background: theme.palette.error.main
    }
  },
  colorOther: {
    color: theme.palette.error.main
  },
  animate: {
    width: 10,
    marginRight: theme.spacing(1),
    height: 10,
    borderRadius: "50%",
    background: theme.palette.error.main,
    animation: `$key-animation 1s linear infinite`
  },
  "@keyframes key-animation": {
    "0%": {
      boxShadow: `0 0 0 0 rgba(255, 0, 0, 0.4)`
    },
    "50%": {
      boxShadow: `0 0 0 5px rgba(255, 0, 0, 0.4)`
    },
    "100%": {
      boxShadow: `0 0 0 10px rgba(255, 0, 0, 0.2)`
    }
  }
});

function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="Service 1"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Service 2"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="Service 3"
      />
    </FormGroup>
  );
}

class DetailProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            price,
            star,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div>
              <Box my={2}>
                <Typography variant="h5">
                  <b>{title}</b>
                </Typography>
                <Box my={1} display="flex" alignItems="center">
                  <Rating name="read-only" size="small" value={star} readOnly />
                  <Box ml={1}>
                    <Typography variant="body2">
                      20 reviews | 5 comments
                    </Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12} md={4}>
                  <CardMedia
                    component="img"
                    image={img}
                    className={classes.cardImg}
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={4}>
                  <Typography gutterBottom>
                    <Typography component="span" color="textSecondary">
                      Made by:{" "}
                    </Typography>
                    <Typography component="span">
                      <b>{company}</b>
                    </Typography>
                  </Typography>
                  <Typography gutterBottom>
                    <Typography component="span" color="textSecondary">
                      Price:{" "}
                    </Typography>
                    <Typography component="span">
                      <b>{price}</b>
                    </Typography>
                  </Typography>
                  <Typography paragraph variant="body2">
                    <Typography component="span" color="textSecondary">
                      Info about the product:{" "}
                    </Typography>
                    <Typography component="span">
                      Lorem ipsum dolor amet offal butcher quinoa sustainable
                      gastropub, echo park actually green juice sriracha paleo.
                    </Typography>
                  </Typography>
                  <Button
                    endIcon={<DiscFullIcon />}
                    variant="contained"
                    className={classes.installment}
                  >
                    Installment
                  </Button>
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
                  <Box
                    mt={2}
                    border="1px solid #e0e0e0"
                    bgcolor="#f9f9ff"
                    p={2}
                  >
                    <Typography className={classes.colorOther}>
                      <b>Other services at Bird shop!</b>
                    </Typography>
                    <Checkboxes />
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12} md={4}>
                  <Typography paragraph>
                    <b>Gifts when buying products</b>
                  </Typography>
                  <Box mb={1} display="flex">
                    <DriveEtaIcon style={{ fill: "#ff8904" }} />
                    <Box ml={1}>
                      <Typography>Delivery within a week</Typography>
                    </Box>
                  </Box>
                  <Box mb={1} display="flex">
                    <SecurityIcon style={{ fill: "#ff8904" }} />
                    <Box ml={1}>
                      <Typography>Warranty 12 months</Typography>
                    </Box>
                  </Box>
                  <Box mb={1} display="flex">
                    <CardGiftcardIcon style={{ fill: "#ff8904" }} />
                    <Box ml={1}>
                      <Typography>Discount 25% for the first order</Typography>
                    </Box>
                  </Box>
                  <Box mb={1} display="flex">
                    <LocalAtmIcon style={{ fill: "#ff8904" }} />
                    <Box ml={1}>
                      <Typography>
                        100% refund when returning products within 24 hours
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    border="1px solid #e0e0e0"
                    bgcolor="#f9f9ff"
                    py={1}
                    px={4}
                    display="flex"
                    alignItems="center"
                  >
                    <Box className={classes.animate}></Box>
                    <Typography color="primary">
                      Call now: <strong>1900.888.888</strong>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DetailProduct);
