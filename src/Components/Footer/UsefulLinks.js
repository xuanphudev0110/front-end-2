import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Box, Link } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import { ColorTextTypography } from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 600,
    paddingBottom: "8px",
    marginBottom: "16px",
    borderBottom: `2px solid ${orange[500]}`
  },
  icon: {
    fontSize: "16px",
    color: orange[500],
    cursor: "pointer"
  },
  link: {
    marginLeft: "8px",
    textDecoration: "none !important",
    color: "#ab967f",
    "&:hover": {
      color: orange[500]
    }
  },
  list: {
    borderBottom: `1px solid ${theme.palette.grey[700]}`,
    paddingBottom: "8px",
    marginBottom: "8px"
  }
}));

const data = [
  "Home",
  "About us",
  "Services",
  "Terms of service",
  "Privacy policy"
];

function UsefulLinks() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ColorTextTypography className={classes.title}>
        USEFUL LINKS
      </ColorTextTypography>
      {data.map((data, idx) => (
        <Box
          className={classes.list}
          display="flex"
          alignItems="center"
          key={(() => `idx${idx}`)()}
        >
          <ArrowForwardIosIcon className={classes.icon} />
          <Link href="#" className={classes.link}>
            {data}
          </Link>
        </Box>
      ))}
    </React.Fragment>
  );
}

export default UsefulLinks;
