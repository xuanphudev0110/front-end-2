import React from "react";
import {
  makeStyles,
  withStyles,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@material-ui/core";
import { ProductConsumer } from "../../Context";
import news from "../../Files/Images/news.jpg";
import event from "../../Files/Images/events.jpg";
import company2 from "../../Files/Images/companys.jpg";

const useStyles = makeStyles(theme => ({
  tutorial: {
    background: theme.palette.grey[50],
    padding: theme.spacing(1, 2),
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: 4
  },
  news: {
    cursor: "pointer",
    textDecoration: "none",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: 18,
    "&:hover": {
      color: "#0000ee"
    }
  },
  btnNews: {
    background: theme.palette.error.main,
    color: theme.palette.common.white,
    padding: "2px 8px",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.error.main,
      color: theme.palette.common.white
    }
  },
  btnEvent: {
    background: theme.palette.success.main,
    color: theme.palette.common.white,
    padding: "2px 8px",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.success.main,
      color: theme.palette.common.white
    }
  },
  btnAbout: {
    background: theme.palette.warning.main,
    color: theme.palette.common.white,
    padding: "2px 8px",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.warning.main,
      color: theme.palette.common.white
    }
  },
  btnProduct: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "2px 8px",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white
    }
  }
}));

const CardImg34 = withStyles({
  root: {
    height: 0,
    paddingTop: "calc(100% * 3 / 4)",
    cursor: "pointer"
  }
})(CardMedia);
function Tutorial() {
  const classes = useStyles();
  return (
    <Box className={classes.tutorial}>
      <ProductConsumer>
        {value => {
          const { company, img, title } = value.detailProduct;
          return (
            <React.Fragment>
              <Typography variant="h6">
                <b>Guide and advice on {title}</b>
              </Typography>
              <Box mt={1}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card>
                      <CardImg34 image={img} />
                      <CardContent>
                        <a
                          target="_blank"
                          href="/aboutus"
                          className={classes.news}
                        >
                          {title}: Lorem ipsum donut sit amet totam rem
                        </a>
                        <Box my={1}>
                          <Typography variant="body2">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                          </Typography>
                        </Box>
                        <Button className={classes.btnProduct}>
                          Evaluate - Advisory
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card>
                      <CardMedia component="img" image={company2} />
                      <CardContent>
                        <a
                          target="_blank"
                          href="/aboutus"
                          className={classes.news}
                        >
                          {company}: Lorem ipsum donut sit amet totam rem
                        </a>
                        <Box my={1}>
                          <Typography variant="body2">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                          </Typography>
                        </Box>
                        <Button className={classes.btnAbout}>
                          About - Company
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card>
                      <CardMedia component="img" image={event} />
                      <CardContent>
                        <a
                          target="_blank"
                          href="/events"
                          className={classes.news}
                        >
                          Event: Lorem ipsum donut sit amet totam rem
                        </a>
                        <Box my={1}>
                          <Typography variant="body2">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                          </Typography>
                        </Box>
                        <Button className={classes.btnEvent}>
                          Event - Speaker
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card>
                      <CardMedia component="img" image={news} />
                      <CardContent>
                        <a
                          target="_blank"
                          href="/front-end-2"
                          className={classes.news}
                        >
                          News: Lorem ipsum donut sit amet totam rem
                        </a>
                        <Box my={1}>
                          <Typography variant="body2">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                          </Typography>
                        </Box>
                        <Button className={classes.btnNews}>
                          News - Trending
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    </Box>
  );
}

export default Tutorial;
