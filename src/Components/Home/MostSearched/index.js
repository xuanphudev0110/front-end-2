import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Box,
  CardMedia,
  Typography
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import PageviewOutlinedIcon from "@material-ui/icons/PageviewOutlined";
import { ProductConsumer } from "../../../Context";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: `calc(100% + 16px)`,
    flexWrap: "wrap",
    boxSizing: "border-box",
    margin: -8
  },
  itemLg: {
    margin: 0,
    boxSizing: `border-box`,
    padding: 8,
    flexGrow: 0,
    maxWidth: "20%",
    flexBasis: "20%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "25%",
      flexBasis: "25%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
      flexBasis: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      flexBasis: "100%"
    }
  },
  card: {
    cursor: "pointer",
    boxShadow: `0px 0px 2px ${theme.palette.grey[500]}`,
    "&:hover": {
      boxShadow: `0px 0px 5px ${theme.palette.grey[800]}`
    }
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: theme.spacing(2)
    }
  },
  imageProducts: {
    width: 60,
    height: 65
  },
  titleProducts: {
    textDecoration: "none",
    marginTop: 4,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  fontWeight: {
    fontWeight: 550
  },
  mostSearches: {
    display: "flex",
    alignItems: "center",
    background: theme.palette.grey[300],
    fontSize: 18,
    padding: "4px 0",
    paddingLeft: 12,
    borderLeft: `3px solid ${theme.palette.error.main}`,
    borderRight: `3px solid ${theme.palette.error.main}`,
    width: "calc(20% - 27px)",
    borderRadius: "0 20px 0 20px",
    [theme.breakpoints.down("md")]: {
      width: "calc(25% - 27px)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(50% - 27px)"
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(75% - 27px)"
    }
  },
  borderTitle: {
    position: "relative",
    zIndex: -1,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    marginBottom: theme.spacing(2),
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: -1,
      left: 0,
      width: 17,
      height: 1,
      background: theme.palette.common.white
    }
  }
}));

function MostSearched() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.borderTitle}>
        <Typography className={classes.mostSearches}>
          <b>Most Searches</b>&nbsp; <PageviewOutlinedIcon color="error" />
        </Typography>
      </Box>
      <div className={classes.root}>
        <ProductConsumer>
          {value => {
            return value.products
              .filter(product => product.hot === true)
              .map(product => (
                <div className={classes.itemLg} key={product.id}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Box display="flex" alignItems="center">
                        <Box
                          component={RouterLink}
                          to="/detail"
                          onClick={() => value.handleDetail(product.id)}
                        >
                          <CardMedia
                            component="img"
                            image={product.img}
                            className={classes.imageProducts}
                          />
                        </Box>
                        <Box ml={2}>
                          <Typography
                            component={RouterLink}
                            className={classes.titleProducts}
                            to="/detail"
                            onClick={() => value.handleDetail(product.id)}
                            variant="body2"
                          >
                            <b>{product.title}</b>
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            className={classes.fontWeight}
                          >
                            {Math.floor(Math.random() * (20000 - 900) + 900)}{" "}
                            Searches
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </div>
              ));
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

export default MostSearched;
