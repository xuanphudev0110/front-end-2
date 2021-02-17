import React from "react";
import { ProductConsumer } from "../../Context";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ColorTextTypography } from "../../Core/TypographyColor";
const useStyles = makeStyles(theme => ({
  bgTitle: {
    background: theme.palette.grey[300],
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    paddingLeft: theme.spacing(1.5)
  }
}));
function Nike() {
  const classes = useStyles();
  return (
    <div>
      <Box mb={2} className={classes.bgTitle}>
        <Typography style={{ fontSize: 18 }}>
          <b>Our premium products</b>
        </Typography>
      </Box>
      <List>
        <ProductConsumer>
          {value => {
            const arr = value.products;
            const copy = [...arr];
            return copy
              .filter(product => product.title.substr(0, 4) === "Nike")
              .sort(() => 0.5 - Math.random())
              .slice(0, 5)
              .map(product => (
                <ListItem divider key={product.id}>
                  <ListItemAvatar>
                    <Avatar
                      alt={`alt${product.id}`}
                      src={product.img}
                      variant="square"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography>
                          <b>{product.title}</b>
                        </Typography>

                        <Box>
                          <ColorTextTypography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                          >
                            Price:&nbsp;
                          </ColorTextTypography>
                          <Typography component="span">
                            <b>${product.price}</b>
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ));
          }}
        </ProductConsumer>
      </List>
    </div>
  );
}

export default Nike;
