import React from "react";
import {
  makeStyles,
  withStyles,
  Box,
  Typography,
  Grid,
  Button
} from "@material-ui/core";
import { ProductConsumer } from "../../Context";
import Rating from "@material-ui/lab/Rating";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    borderRadius: 5
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  tutorial: {
    background: theme.palette.grey[50],
    padding: theme.spacing(1, 2),
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: 4
  },
  totalReviews: {
    background: theme.palette.error.dark,
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: "bold",
    padding: 4,
    marginLeft: 8,
    borderRadius: 4
  },
  submit: {
    background: theme.palette.error.dark,
    color: theme.palette.common.white,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.error.dark,
      color: theme.palette.common.white
    }
  },
  averageRating: {
    color: theme.palette.error.dark
  }
}));
function Review() {
  const classes = useStyles();
  return (
    <Box className={classes.tutorial}>
      <ProductConsumer>
        {value => {
          const { star, title } = value.detailProduct;
          return (
            <React.Fragment>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">
                  <b>Reviews &amp; Comments {title}</b>{" "}
                </Typography>
                <Typography className={classes.totalReviews}>20</Typography>
              </Box>
              <Box mt={1}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item md={4} sm={6} xs={12}>
                    <Box textAlign="center">
                      <Typography color="textSecondary">
                        <b>Average Rating</b>
                      </Typography>
                      <Box my={1}>
                        <Typography
                          variant="h4"
                          className={classes.averageRating}
                        >
                          <b>{star} / 5</b>
                        </Typography>
                      </Box>
                      <div>
                        <Rating name="readOnly" value={star} readOnly></Rating>
                      </div>
                      <Typography variant="body2" color="textSecondary">
                        20 reviews &amp; 5 comments
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <Box textAlign="center">
                      <Box mb={1}>
                        5 <Rating name="readOnly" value={1} max={1} readOnly />
                        <BorderLinearProgress
                          variant="determinate"
                          value={100}
                        />
                      </Box>
                      <Box mb={1}>
                        <BorderLinearProgress variant="determinate" value={0} />
                      </Box>
                      <Box mb={1}>
                        <BorderLinearProgress variant="determinate" value={0} />
                      </Box>
                      <Box mb={1}>
                        <BorderLinearProgress variant="determinate" value={0} />
                      </Box>
                      <Box>
                        <BorderLinearProgress variant="determinate" value={0} />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <Box textAlign="center">
                      <Typography variant="body2" gutterBottom>
                        Did you use this product?
                      </Typography>
                      <Button className={classes.submit}>
                        Submit your review
                      </Button>
                    </Box>
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

export default Review;
