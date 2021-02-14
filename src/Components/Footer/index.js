import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Container } from "@material-ui/core";
import UsefulLinks from "./UsefulLinks";
import ContactUs from "./ContactUs";
import logo from "../../Files/Images/avatar.png";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";
import content from "../../Files/Images/bg-content.png";
import contact from "../../Files/Images/contact-bg.jpg";

const useStyles = makeStyles(theme => ({
  bg: {
    background: `url("${contact}") center center`
  },
  bgFooter: {
    background: `url("${content}")`,
    padding: theme.spacing(3, 0)
  },
  bgFooter2: {
    padding: theme.spacing(3, 0),
    background: "#101522",
    color: theme.palette.common.white
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.bg}>
      <Box className={classes.bgFooter}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <img src={logo} alt="logo" />
              <Box mt={1}>
                <ColorTextTypography variant="body2">
                  In alias aperiam. Placeat tempore facere. Officiis voluptate
                  ipsam vel eveniet est dolor et totam porro. Perspiciatis ad
                  omnis fugit molestiae recusandae possimus. Aut consectetur id
                  quis. In inventore consequatur ad voluptate cupiditate debitis
                  accusamus repellat cumque.
                </ColorTextTypography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <UsefulLinks />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <UsefulLinks />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ContactUs />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.bgFooter2}>
        <Grid container alignItems="center" direction="column">
          <ColorTextTypography component="p">
            Copyright &copy; Project 2021. All Rights Reserved
          </ColorTextTypography>
          <Box>
            <ColorTextTypography component="span" variant="body2">
              Designed by
            </ColorTextTypography>
            &nbsp;
            <OrangeTypography component="span" variant="body2">
              Pham Xuan Phu
            </OrangeTypography>
          </Box>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
