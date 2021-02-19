import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Menu from "../Navbar";
import Footer from "../Footer";
import Events from "../Events";
import ContactUs from "../ContactUs";
import Detail from "../Details";
import Cart from "../Cart";
import Accessories from "../Accessories";
import Shoes from "../Shoes";
import Clothes from "../Clothes";
import Adidas from "../Adidas";
import Nike from "../Nike";
import Puma from "../Puma";
import flower1 from "../../Files/Images/flowers/flower1.png";
import flower2 from "../../Files/Images/flowers/flower2.png";
import flower3 from "../../Files/Images/flowers/flower3.png";
import flower4 from "../../Files/Images/flowers/flower4.png";
import flower5 from "../../Files/Images/flowers/flower5.png";
import flower6 from "../../Files/Images/flowers/flower6.png";

const useStyles = makeStyles({
  flowers: {
    position: "relative"
  },
  flower: {
    position: "fixed",
    opacity: 0,
    left: 0,
    zIndex: 1000,
    top: 0,
    "&:nth-child(1)": {
      left: "15%",
      animation: `$moveY 5s linear infinite`
    },
    "&:nth-child(2)": {
      left: "30%",
      animation: `$moveY 4s 2s linear infinite`
    },
    "&:nth-child(3)": {
      left: "45%",
      animation: `$moveY 3s 2s linear infinite`
    },
    "&:nth-child(4)": {
      left: "60%",
      animation: `$moveY 5s 3s linear infinite`
    },
    "&:nth-child(5)": {
      left: "75%",
      animation: `$moveY 5s 5s linear infinite`
    },
    "&:nth-child(6)": {
      left: "90%",
      animation: `$moveY 4s 3s linear infinite`
    },
    "&:nth-child(7)": {
      left: "85%",
      animation: `$moveY 4s 4s linear infinite`
    },
    "&:nth-child(8)": {
      left: "5%",
      animation: `$moveY 4s 5s linear infinite`
    }
  },
  imgFlower: {
    width: 30,
    "&:nth-child(1)": {
      animation: `$moveX 1s ease-in-out infinite alternate`
    },
    "&:nth-child(2)": {
      animation: `$moveX 3s 1s ease-in-out infinite alternate`
    },
    "&:nth-child(3)": {
      animation: `$moveX 3s 2s ease-in-out infinite alternate`
    },
    "&:nth-child(4)": {
      animation: `$moveX 4s 1s ease-in-out infinite alternate`
    },
    "&:nth-child(5)": {
      animation: `$moveX 1s 2s ease-in-out infinite alternate`
    },
    "&:nth-child(6)": {
      animation: `$moveX 1s ease-in-out infinite alternate`
    }
  },
  "@keyframes moveX": {
    "0%": { transform: `translateX(0)` },
    "100%": { transform: `translateX(60px)` }
  },
  "@keyframes moveY": {
    "0%": {
      opacity: 1,
      transform: `translateY(0)`
    },
    "80%": {
      opacity: 1
    },
    "100%": {
      transform: `translateY(100vh)`,
      opacity: 0
    }
  }
});

function Routing() {
  const classes = useStyles();
  return (
    <div className={classes.flowers}>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower6} alt="Flower1" />
      </div>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower5} alt="Flower2" />
      </div>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower1} alt="Flower3" />
      </div>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower4} alt="Flower4" />
      </div>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower2} alt="Flower5" />
      </div>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower3} alt="Flower6" />
      </div>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower1} alt="Flower7" />
      </div>
      <div className={classes.flower}>
        <img className={classes.imgFlower} src={flower6} alt="Flower8" />
      </div>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/front-end-2">
            <Home />
          </Route>
          <Route
            exact
            path={"/"}
            render={() => {
              return <Redirect to={"/front-end-2"} />;
            }}
          />
          <Route path="/accessories">
            <Accessories />
          </Route>
          <Route path="/adidas">
            <Adidas />
          </Route>
          <Route path="/nike">
            <Nike />
          </Route>
          <Route path="/puma">
            <Puma />
          </Route>
          <Route path="/shoes">
            <Shoes />
          </Route>
          <Route path="/clothes">
            <Clothes />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/aboutus">
            <About />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default Routing;
