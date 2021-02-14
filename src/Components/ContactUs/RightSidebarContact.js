import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import content from "../../Files/Images/bg-content.png";
import {
  ColorTextTypography,
  OrangeTypography
} from "../../Core/TypographyColor";
const useStyles = makeStyles({
  textColor2: {
    color: "#ab967f"
  },
  lastest: {
    background: `url("${content}")`,
    padding: "20px"
  }
});

const data = [
  {
    title: "Hot news",
    content: (
      <ColorTextTypography variant="body2">
        This website template has been <br /> designed by freewebsitetemplates
        for
        <br /> you, for free. You can replace all this <br /> text with your own
        text.
      </ColorTextTypography>
    )
  },
  {
    title: "Latest Product News",
    content: (
      <ColorTextTypography variant="body2">
        This website template has been <br /> designed by freewebsitetemplates
        for
        <br /> you, for free. You can replace all this <br /> text with your own
        text.
      </ColorTextTypography>
    )
  },
  {
    title: "Address",
    content: (
      <ColorTextTypography variant="body2">
        18th Floor, Lorem ipsum dolor <br /> Adipiscing Bldg. , Quisque Avenue
        <br /> Samar Loop St., Businees Park <br />
        Quisque vestibulum, 6029 <br /> Lorem, Ipsum Dolor
      </ColorTextTypography>
    )
  }
];

function RightSidebarContact() {
  const classes = useStyles();
  return (
    <div>
      {data.map((item, idx) => (
        <Box
          className={classes.lastest}
          key={(() => `index${idx}`)()}
          mb={idx !== 2 ? 2 : 0}
        >
          <OrangeTypography variant="h5" gutterBottom>
            <b>{item.title}</b>
          </OrangeTypography>
          {item.content}
        </Box>
      ))}
    </div>
  );
}
export default RightSidebarContact;
