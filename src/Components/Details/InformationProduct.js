import React from "react";
import { Typography, Grid, CardMedia, Box, Button } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ProductConsumer } from "../../Context";
import Nike from "./Nike";

const useStyles = makeStyles(theme => ({
  bgTitle: {
    background: theme.palette.grey[300],
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    paddingLeft: theme.spacing(1.5)
  },
  img1: {
    width: "60%",
    height: "60%",
    margin: "0 auto"
  },

  formDetail: {
    position: "relative"
  },
  outstanding: {
    position: "absolute",
    top: 50,
    left: "65%",
    background: orange[500],
    padding: "8px 16px",
    borderRadius: "20px"
  },
  btnViewMore: {
    textTransform: "none"
  }
}));

function InformationProduct() {
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  return (
    <ProductConsumer>
      {value => {
        const { img, info } = value.detailProduct;
        return (
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <Box mb={2} className={classes.bgTitle}>
                <Typography style={{ fontSize: 18 }}>
                  Outstanding characteristics
                </Typography>
              </Box>
              <Typography variant="body2">{info}</Typography>
              <div className={classes.formDetail}>
                <CardMedia
                  component="img"
                  image={img}
                  className={classes.img1}
                />
                <div className={classes.outstanding}>Outstanding</div>
                {open === false && (
                  <Button
                    className={classes.btnViewMore}
                    onClick={handleChange}
                    color="primary"
                    variant="outlined"
                    endIcon={open === false ? <ExpandMoreIcon /> : ""}
                  >
                    {open === false ? <span>View More</span> : ""}
                  </Button>
                )}
              </div>

              {open === true && (
                <React.Fragment>
                  <Box my={2} className={classes.bgTitle}>
                    <Typography style={{ fontSize: 18 }}>
                      Product detail
                    </Typography>
                  </Box>
                  <Typography variant="body2">{info}</Typography>
                  <div className={classes.formDetail}>
                    <CardMedia
                      component="img"
                      image={img}
                      className={classes.img1}
                    />
                    <div className={classes.outstanding}>Product detail</div>
                  </div>
                </React.Fragment>
              )}
            </Grid>
            <Grid item md={4} xs={12}>
              <Nike />
            </Grid>
          </Grid>
        );
      }}
    </ProductConsumer>
  );
}

export default InformationProduct;
