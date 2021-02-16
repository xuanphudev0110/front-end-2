import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Rating from "@material-ui/lab/Rating";

function Loading() {
  return (
    <Container maxWidth="lg">
      <Box my={2}>
        <Box mb={2}>
          <Skeleton variant="rect" height={300} />
        </Box>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map(item => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Skeleton variant="rect" height={250} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Rating name="read-only" value={0} readOnly />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Loading;
