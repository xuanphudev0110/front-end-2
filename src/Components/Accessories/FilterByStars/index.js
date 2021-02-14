import React from "react";
import PropTypes from "prop-types";
import { Box, ButtonGroup, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import TocIcon from "@material-ui/icons/Toc";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import FilterByStarGrid from "./FilterByStarGrid";
import FilterByStarList from "./FilterByStarList";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  bgTitle: {
    background: theme.palette.grey[300],
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    paddingLeft: theme.spacing(1.5)
  }
}));

function FilterByStars({ numberStar, star1, star2, star3 }) {
  const [viewType, setView] = React.useState("grid");
  const handleChangeView = type => {
    setView(type);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.bgTitle}
      >
        <Grid item>
          <Box display="flex" alignItems="center">
            <Typography component="span" style={{ fontSize: 18 }}>
              <b>Filter</b>&nbsp;
            </Typography>
            <Typography component="span" color="textSecondary">
              product&nbsp;
            </Typography>

            <Rating
              name="read-only"
              value={numberStar}
              max={numberStar}
              readOnly
              style={{ paddingRight: 2 }}
            />
            <FindReplaceIcon color="error" />
          </Box>
        </Grid>
        <Grid item>
          <ButtonGroup size="small" aria-label="select display style">
            <Button
              disableRipple
              disableFocusRipple
              disableElevation
              disableTouchRipple
              variant={viewType === "grid" ? "contained" : undefined}
              color={viewType === "grid" ? "primary" : undefined}
              onClick={() => handleChangeView("grid")}
            >
              <AppsIcon />
            </Button>
            <Button
              disableRipple
              disableFocusRipple
              disableElevation
              disableTouchRipple
              variant={viewType === "list" ? "contained" : undefined}
              color={viewType === "list" ? "primary" : undefined}
              onClick={() => handleChangeView("list")}
            >
              <TocIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      {viewType === "grid" ? (
        <FilterByStarGrid star1={star1} star2={star2} star3={star3} />
      ) : (
        <FilterByStarList star1={star1} star2={star2} star3={star3} />
      )}
    </React.Fragment>
  );
}
FilterByStars.propTypes = {
  numberStar: PropTypes.number,
  star1: PropTypes.bool,
  star2: PropTypes.bool,
  star3: PropTypes.bool
};
export default FilterByStars;
