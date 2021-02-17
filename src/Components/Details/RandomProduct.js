import React from "react";
import { ProductConsumer } from "../../Context";
import { Grid, Box, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EcoIcon from "@material-ui/icons/Eco";
import orange from "@material-ui/core/colors/orange";
import { ColorTextTypography } from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  price: {
    color: theme.palette.error.main
  },
  bgTitle: {
    background: theme.palette.grey[300],
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    paddingLeft: theme.spacing(1.5)
  },
  title: {
    textDecoration: "none",
    color: theme.palette.grey[800],
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  productCenter: {
    textAlign: "center"
  },
  namePd: {
    color: orange[500]
  },
  installment: {
    position: "absolute",
    left: 10,
    top: 10,
    borderRadius: 4,
    padding: "4px",
    background: theme.palette.error.main,
    color: theme.palette.common.white
  }
}));

export default function RandomProduct() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.bgTitle}>
          <Box display="flex" alignItems="center">
            <Typography style={{ fontSize: 18, paddingRight: 2 }}>
              <b>Random</b>
            </Typography>
            <EcoIcon color="error" />
          </Box>
        </Grid>
        <ProductConsumer>
          {value => {
            const arr = value.products;
            const copy = [...arr];
            const item = copy.sort(() => 0.5 - Math.random());
            const limit = item.slice(0, 4);
            return limit.map(product => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card style={{ height: "100%" }}>
                  <Box style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        position: "relative",
                        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${product.img}") no-repeat center center`,
                        backgroundSize: "cover",
                        padding: "90px 0"
                      }}
                    >
                      <Typography
                        variant="body2"
                        className={classes.installment}
                      >
                        Trả góp 0%
                      </Typography>
                      <Box className={classes.productCenter}>
                        <Typography className={classes.namePd}>
                          <b>{product.title}</b>
                        </Typography>
                        <Box>
                          <ColorTextTypography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                          >
                            Price:&nbsp;
                          </ColorTextTypography>
                          <Typography
                            component="span"
                            className={classes.price}
                          >
                            <b>${product.price}</b>
                          </Typography>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Card>
              </Grid>
            ));

            // console.log(limit);
          }}
        </ProductConsumer>
      </Grid>
    </React.Fragment>
  );
}
