import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                  <h2>Model: {title}</h2>
                  <h4>Made by: {company}</h4>
                  <h4>Price: {price}</h4>
                  <p>{info}</p>
                </div>
              </div>
              <Link to="/">
                <button>Back to shop</button>
              </Link>
              <button
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                }}
              >
                {inCart ? "inCart" : "Add to cart"}
              </button>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
