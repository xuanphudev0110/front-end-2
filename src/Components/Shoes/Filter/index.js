import React from "react";
import PropTypes from "prop-types";
import { Box, ButtonGroup, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import TocIcon from "@material-ui/icons/Toc";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import FilterGrid from "./FilterGrid";
import FilterList from "./FilterList";

const useStyles = makeStyles(theme => ({
  bgTitle: {
    background: theme.palette.grey[300],
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    paddingLeft: theme.spacing(1.5)
  }
}));

function Filter({ filter, price1, price2, price3, price4 }) {
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
            <Box>
              <Typography
                component="span"
                style={{ fontSize: 18, paddingRight: 2 }}
              >
                <b>Filter</b>
              </Typography>
              &nbsp;
              <Typography
                component="span"
                color="textSecondary"
                variant="body2"
                style={{ paddingRight: 2 }}
              >
                {filter}
              </Typography>
            </Box>
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
        <FilterGrid
          price1={price1}
          price2={price2}
          price3={price3}
          price4={price4}
        />
      ) : (
        <FilterList
          price1={price1}
          price2={price2}
          price3={price3}
          price4={price4}
        />
      )}
    </React.Fragment>
  );
}
FilterGrid.propTypes = {
  filter: PropTypes.string,
  price1: PropTypes.bool,
  price2: PropTypes.bool,
  price3: PropTypes.bool,
  price4: PropTypes.bool
};
export default Filter;
