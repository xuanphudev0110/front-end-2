import React from "react";
import { Box, ButtonGroup, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import TocIcon from "@material-ui/icons/Toc";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import GlassesGrid from "./GlassesGrid";
import GlassesList from "./GlassesList";

const useStyles = makeStyles(theme => ({
  bgTitle: {
    background: theme.palette.grey[300],
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    paddingLeft: theme.spacing(1.5)
  }
}));

function Glasses() {
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
            <Typography style={{ fontSize: 18, paddingRight: 2 }}>
              <b>Glasses</b>
            </Typography>
            <BubbleChartIcon color="error" />
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

      {viewType === "grid" ? <GlassesGrid /> : <GlassesList />}
    </React.Fragment>
  );
}

export default Glasses;
