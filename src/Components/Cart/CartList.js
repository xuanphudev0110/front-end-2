import React from "react";
import CartItem from "./CartItem";
import { Container, Box } from "@material-ui/core";

export default function CardList({ value }) {
  const { cart } = value;
  console.log(cart, value);

  return (
    <Container maxWidth="md">
      <Box mt={2}>
        {cart.map(item => {
          return <CartItem key={item.id} item={item} value={value} />;
        })}
      </Box>
    </Container>
  );
}
