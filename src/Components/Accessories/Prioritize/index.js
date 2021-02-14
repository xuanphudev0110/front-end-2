import React from "react";
import Glasses from "../Glasses";
import Cap from "../Cap";
import Belt from "../Belt";
import Watch from "../Watch";
import Wallet from "../Wallet";
import Handbag from "../Handbag";

function Prioritize() {
  return (
    <React.Fragment>
      <Glasses />
      <Cap />
      <Belt />
      <Watch />
      <Wallet />
      <Handbag />
    </React.Fragment>
  );
}

export default Prioritize;
