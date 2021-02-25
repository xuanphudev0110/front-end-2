import React from "react";
import { Container, Box, Grid, RadioGroup, Radio } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, withStyles } from "@material-ui/core";
import Glasses from "./Glasses";
import Cap from "./Cap";
import Belt from "./Belt";
import Watch from "./Watch";
import Wallet from "./Wallet";
import Handbag from "./Handbag";
import content from "../../Files/Images/bg-content.png";
import contact from "../../Files/Images/contact-bg.jpg";
import { OrangeTypography } from "../../Core/TypographyColor";
import Prioritize from "./Prioritize";
import Filter from "./Filter";
import Tutorial from "../General/Tutorial";
import Policy from "../General/Policy";
import FilterByStars from "./FilterByStars";
import AutoComplete from "./AutoComplete";
import Header from "./Header";
import Rating from "@material-ui/lab/Rating";
import SliderProduct from "../General/SliderProduct/index";
import ServicesGeneral from "../General/Services";

const useStyles = makeStyles(theme => ({
  bg: {
    background: `url("${contact}") center center`
  },
  bgFooter: {
    background: `url("${content}")`,
    padding: theme.spacing(3, 2)
  },
  autoMb: {
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  },
  colorLabel: {
    color: "#ab967f"
  }
}));
const CustomRadio = withStyles({
  root: {
    color: "#ab967f",
    "&$checked": {
      color: "#ab967f"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);
function Accessories() {
  const [value, setValue] = React.useState("all");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <div className={classes.autoMb}>
                <AutoComplete />
                <div className={classes.bg}>
                  <div className={classes.bgFooter}>
                    <OrangeTypography>
                      <b>Product Type</b>
                    </OrangeTypography>
                    <RadioGroup
                      aria-label="type"
                      name="type1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="all"
                        control={<CustomRadio />}
                        label="All"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="glasses"
                        control={<CustomRadio />}
                        label="Glasses"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="cap"
                        control={<CustomRadio />}
                        label="Cap"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="belt"
                        control={<CustomRadio />}
                        label="Belt"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="watch"
                        control={<CustomRadio />}
                        label="Watch"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="wallet"
                        control={<CustomRadio />}
                        label="Wallet"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="handbag"
                        control={<CustomRadio />}
                        label="Handbag"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className={classes.bg}>
                  <div className={classes.bgFooter}>
                    <OrangeTypography>
                      <b>Filter by price</b>
                    </OrangeTypography>
                    <RadioGroup
                      aria-label="type"
                      name="type1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="price1"
                        control={<CustomRadio />}
                        label="Under 15$"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="price2"
                        control={<CustomRadio />}
                        label="15$ - 30$"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="price3"
                        control={<CustomRadio />}
                        label="31$ - 50$"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="price4"
                        control={<CustomRadio />}
                        label="Over 50$"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className={classes.bg}>
                  <div className={classes.bgFooter}>
                    <OrangeTypography>
                      <b>Filter by Stars</b>
                    </OrangeTypography>
                    <RadioGroup
                      aria-label="type"
                      name="type1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="star1"
                        control={<CustomRadio />}
                        label={
                          <Rating name="read-only" value={3} max={3} readOnly />
                        }
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="star2"
                        control={<CustomRadio />}
                        label={
                          <Rating name="read-only" value={4} max={4} readOnly />
                        }
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="star3"
                        control={<CustomRadio />}
                        label={
                          <Rating name="read-only" value={5} max={5} readOnly />
                        }
                      />
                    </RadioGroup>
                  </div>
                </div>
                <Tutorial />
                <Policy />
              </div>
            </Grid>
            <Grid item xs={12} lg={9}>
              <div className={classes.autoMb}>
                <Header />
                {value === "all" && <Prioritize />}
                {value === "glasses" && <Glasses />}
                {value === "cap" && <Cap />}
                {value === "belt" && <Belt />}
                {value === "watch" && <Watch />}
                {value === "wallet" && <Wallet />}
                {value === "handbag" && <Handbag />}
                {value === "price1" && <Filter price1 filter="(Under 15$)" />}
                {value === "price2" && <Filter price2 filter="(15$ - 30$)" />}
                {value === "price3" && <Filter price3 filter="(31$ - 50$)" />}
                {value === "price4" && <Filter price4 filter="(Over 50$)" />}
                {value === "star1" && <FilterByStars star1 numberStar={3} />}
                {value === "star2" && <FilterByStars star2 numberStar={4} />}
                {value === "star3" && <FilterByStars star3 numberStar={5} />}
                <SliderProduct />
              </div>
            </Grid>
          </Grid>
        </Box>
        <ServicesGeneral />
      </Container>
    </React.Fragment>
  );
}

export default Accessories;
