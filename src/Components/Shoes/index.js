import React from "react";
import { Container, Box, Grid, RadioGroup, Radio } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, withStyles } from "@material-ui/core";
import content from "../../Files/Images/bg-content.png";
import contact from "../../Files/Images/contact-bg.jpg";
import { OrangeTypography } from "../../Core/TypographyColor";
import Tutorial from "../General/Tutorial";
import Policy from "../General/Policy";
import SliderProduct from "../General/SliderProduct/index";
import AutoComplete from "./AutoComplete";
import Nike from "./Nike";
import Adidas from "./Adidas";
import Puma from "./Puma";
import Gucci from "./Gucci";
import Balance from "./Balance";
import Header from "./Header";
import FilterByStars from "./FilterByStars";
import Filter from "./Filter";
import ServicesGeneral from "../General/Services";
import BannerShop from "../General/BannerShop";

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
function AllProduct() {
  return (
    <React.Fragment>
      <Nike />
      <Adidas />
      <Puma />
      <Gucci />
      <Balance />
    </React.Fragment>
  );
}
function Shoes() {
  const [value, setValue] = React.useState("all");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <BannerShop />
        <Box my={2}>
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
                        value="nike"
                        control={<CustomRadio />}
                        label="Nike"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="adidas"
                        control={<CustomRadio />}
                        label="Adidas"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="puma"
                        control={<CustomRadio />}
                        label="Puma"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="gucci"
                        control={<CustomRadio />}
                        label="Gucci"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="balance"
                        control={<CustomRadio />}
                        label="Balance"
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
                        label="Under 100$"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="price2"
                        control={<CustomRadio />}
                        label="100$ - 150$"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="price3"
                        control={<CustomRadio />}
                        label="151$ - 200$"
                      />
                      <FormControlLabel
                        className={classes.colorLabel}
                        value="price4"
                        control={<CustomRadio />}
                        label="Over 200$"
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
                {value === "all" && <AllProduct />}
                {value === "nike" && <Nike />}
                {value === "adidas" && <Adidas />}
                {value === "puma" && <Puma />}
                {value === "gucci" && <Gucci />}
                {value === "balance" && <Balance />}
                {value === "price1" && <Filter price1 filter="(Under 100$)" />}
                {value === "price2" && <Filter price2 filter="(100$ - 150$)" />}
                {value === "price3" && <Filter price3 filter="(151$ - 200$)" />}
                {value === "price4" && <Filter price4 filter="(Over 200$)" />}
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

export default Shoes;
