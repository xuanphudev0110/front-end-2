import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { ColorTextTypography } from "./TypographyColor";

const Accordion = withStyles({
  root: {
    border: "none",
    boxShadow: "none",
    backgroundColor: "unset !important",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    },
    "& > div > div": {
      margin: "0 !important"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 32,
    "&$expanded": {
      minHeight: 32
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
  panel: {
    color: theme.palette.primary.main,
    fontStyle: "italic",
    borderBottom: `1px solid ${theme.palette.primary.main}`
  }
}));

export default function AccordionCustom({ data }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      {data.map((item, idx) => (
        <Accordion
          square
          key={(() => `idx${idx}`)()}
          expanded={expanded === `${item.panel}`}
          onChange={handleChange(`${item.panel}`)}
        >
          <AccordionSummary
            aria-controls={`${item.panel}d-content`}
            id={`${item.panel}d-header`}
          >
            <ColorTextTypography
              className={expanded === `${item.panel}` ? classes.panel : ""}
            >
              <b>{item.question}</b>
            </ColorTextTypography>
          </AccordionSummary>
          <AccordionDetails>
            <ColorTextTypography>{item.content}</ColorTextTypography>
          </AccordionDetails>
        </Accordion>
      ))}
    </React.Fragment>
  );
}
AccordionCustom.propTypes = {
  data: PropTypes.any
};
