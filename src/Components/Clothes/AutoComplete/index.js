import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, Grid, Typography, CardMedia, TextField } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ProductConsumer } from "../../../Context";

const useStyles = makeStyles(theme => ({
  formSearch: {
    "& > div > div": {
      borderRadius: "99px !important"
    }
  },
  item: {
    width: "100%",
    height: "100%",
    padding: "6px 12px",
    textDecoration: "none"
  },
  title: {
    color: theme.palette.common.black
  },
  price: {
    color: theme.palette.error.main
  }
}));

function AutoComplete() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ProductConsumer>
        {value => (
          <Autocomplete
            className={classes.formSearch}
            size="small"
            options={value.products}
            getOptionLabel={option => option.title}
            renderOption={option => {
              if (option.type === "Clothes") {
                return (
                  <Box
                    component={RouterLink}
                    to="/detail"
                    className={classes.item}
                    onClick={() => value.handleDetail(option.id)}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <CardMedia component="img" image={option.img} />
                      </Grid>
                      <Grid item xs={9}>
                        <Typography className={classes.title}>
                          <b>{option.title}</b>
                        </Typography>
                        <Box>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                          >
                            Price:
                          </Typography>
                          &nbsp;
                          <Typography
                            component="span"
                            className={classes.price}
                          >
                            <b>{option.price}$</b>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                );
              }
            }}
            renderInput={params => (
              <TextField
                fullWidth
                {...params}
                variant="outlined"
                placeholder="Search clothes ..."
              />
            )}
          />
        )}
      </ProductConsumer>
    </React.Fragment>
  );
}

export default AutoComplete;
