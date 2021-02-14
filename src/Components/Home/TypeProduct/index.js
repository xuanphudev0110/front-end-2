import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, CardMedia } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ColorTextTypography } from "../../../Core/TypographyColor";
import logo1 from "../../../Files/Images/logo/adidas.jpg";
import logo2 from "../../../Files/Images/logo/apple.jpg";
import logo3 from "../../../Files/Images/logo/balance.jpg";
import logo4 from "../../../Files/Images/logo/dior.jpg";
import logo5 from "../../../Files/Images/logo/balance2.jpg";
import logo6 from "../../../Files/Images/logo/gucci.jpg";
import logo7 from "../../../Files/Images/logo/jeans.jpg";
import logo8 from "../../../Files/Images/logo/kaki.jpg";
import logo9 from "../../../Files/Images/logo/levis.png";
import logo10 from "../../../Files/Images/logo/nike.jpg";
import logo11 from "../../../Files/Images/logo/puma.jpg";
import logo12 from "../../../Files/Images/logo/rolex.jpg";

const useStyles = makeStyles(theme => ({
  card: {
    cursor: "pointer",
    textDecoration: "none"
  },
  cardImg: {
    // borderRadius: 99,
    width: "50%",
    margin: "0 auto",
    paddingTop: theme.spacing(2)
  },
  title: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    textAlign: "center"
  },
  shadow: {
    "&:hover": {
      boxShadow: `0px 0px 5px ${theme.palette.grey[800]}`
    }
  },
  gridItem: {
    border: `1px solid ${theme.palette.grey[300]}`
  }
}));

const gridData = [
  {
    img: logo1,
    title: "Adidas",
    link: "adidas"
  },
  {
    img: logo10,
    title: "Nike",
    link: "nike"
  },
  {
    img: logo11,
    title: "Puma",
    link: "puma"
  },
  {
    img: logo2,
    title: "Apple"
  },
  {
    img: logo3,
    title: "Balance"
  },
  {
    img: logo4,
    title: "Dior"
  },
  {
    img: logo5,
    title: "Yoga"
  },
  {
    img: logo6,
    title: "Gucci"
  },
  {
    img: logo7,
    title: "Jeans"
  },
  {
    img: logo8,
    title: "Kaki"
  },
  {
    img: logo9,
    title: "Levi's"
  },

  {
    img: logo12,
    title: "Rolex"
  }
];

function TypeProduct() {
  const classes = useStyles();
  return (
    <Grid container>
      {gridData.map((grid, idx) => (
        <Grid item xs={3} sm={2} key={idx} className={classes.gridItem}>
          <div className={classes.shadow}>
            <Box
              component={RouterLink}
              to={`/${grid.link}`}
              className={classes.card}
            >
              <CardMedia
                component="img"
                image={grid.img}
                className={classes.cardImg}
              />
              <ColorTextTypography className={classes.title}>
                <b>{grid.title}</b>
              </ColorTextTypography>
            </Box>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default TypeProduct;
