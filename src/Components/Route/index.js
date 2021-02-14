import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

class Routing extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/front-end-2">
              <Home />
            </Route>
            <Route exact path="/accessories">
              <Accessories />
            </Route>
            <Route exact path="/adidas">
              <Adidas />
            </Route>
            <Route exact path="/nike">
              <Nike />
            </Route>
            <Route exact path="/puma">
              <Puma />
            </Route>
            <Route exact path="/shoes">
              <Shoes />
            </Route>
            <Route exact path="/clothes">
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
}
export default Routing;
