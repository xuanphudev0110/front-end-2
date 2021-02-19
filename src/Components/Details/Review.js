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
    width: 300,
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
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Box display="flex" alignItems="flex-end">
                        <Typography>5</Typography>
                        <Rating name="readOnly" value={1} max={1} readOnly />
                      </Box>
                      <BorderLinearProgress
                        variant="determinate"
                        value={star === 5 ? 100 : 0}
                      />
                      <Typography color="textSecondary">
                        {star === 5 ? "(20)" : <span>&nbsp;(0)</span>}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Box display="flex" alignItems="flex-end">
                        <Typography>4</Typography>
                        <Rating name="readOnly" value={1} max={1} readOnly />
                      </Box>
                      <BorderLinearProgress
                        variant="determinate"
                        value={star === 4 ? 100 : 0}
                      />
                      <Typography color="textSecondary">
                        {" "}
                        {star === 4 ? "(20)" : <span>&nbsp;(0)</span>}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Box display="flex" alignItems="flex-end">
                        <Typography>3</Typography>
                        <Rating name="readOnly" value={1} max={1} readOnly />
                      </Box>
                      <BorderLinearProgress
                        variant="determinate"
                        value={star === 3 ? 100 : 0}
                      />
                      <Typography color="textSecondary">
                        {" "}
                        {star === 3 ? "(20)" : <span>&nbsp;(0)</span>}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Box display="flex" alignItems="flex-end">
                        <Typography>2</Typography>
                        <Rating name="readOnly" value={1} max={1} readOnly />
                      </Box>
                      <BorderLinearProgress
                        variant="determinate"
                        value={star === 2 ? 100 : 0}
                      />
                      <Typography color="textSecondary">
                        {star === 2 ? "(20)" : <span>&nbsp;(0)</span>}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Box display="flex" alignItems="flex-end">
                        <Typography>1</Typography>
                        <Rating name="readOnly" value={1} max={1} readOnly />
                      </Box>
                      <BorderLinearProgress
                        variant="determinate"
                        value={star === 1 ? 100 : 0}
                      />
                      <Typography color="textSecondary">
                        {star === 1 ? "(20)" : <span>&nbsp;(0)</span>}
                      </Typography>
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
