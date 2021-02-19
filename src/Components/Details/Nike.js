import React from "react";
import { ProductConsumer } from "../../Context";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction
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
                    primary={
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
      <Box mt={2} className={classes.bgTitle}>
        <Typography style={{ fontSize: 18 }}>
          <b>Categories</b>
        </Typography>
      </Box>
      <List>
        <ListItem divider dense>
          <ListItemText primary="Nike" />
          <ListItemSecondaryAction>
            <Box
              bgcolor="#3f51b5"
              py={0.3}
              px={1}
              color="#fff"
              borderRadius={4}
            >
              <b>212</b>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem divider dense>
          <ListItemText primary="Adidas" />
          <ListItemSecondaryAction>
            <Box
              bgcolor="#f50057"
              py={0.3}
              px={1}
              color="#fff"
              borderRadius={4}
            >
              <b>200</b>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem divider dense>
          <ListItemText primary="Puma" />
          <ListItemSecondaryAction>
            <Box
              bgcolor="#8d00ff"
              py={0.3}
              px={1}
              color="#fff"
              borderRadius={4}
            >
              <b>198</b>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem divider dense>
          <ListItemText primary="Jean" />
          <ListItemSecondaryAction>
            <Box
              bgcolor="#f44336"
              py={0.3}
              px={1}
              color="#fff"
              borderRadius={4}
            >
              <b>197</b>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem divider dense>
          <ListItemText primary="Gucci" />
          <ListItemSecondaryAction>
            <Box
              bgcolor="#ff9800"
              py={0.3}
              px={1}
              color="#fff"
              borderRadius={4}
            >
              <b>192</b>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem divider dense>
          <ListItemText primary="Apple Watch" />
          <ListItemSecondaryAction>
            <Box
              bgcolor="#2196f3"
              py={0.3}
              px={1}
              color="#fff"
              borderRadius={4}
            >
              <b>187</b>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem divider dense>
          <ListItemText primary="Balance" />
          <ListItemSecondaryAction>
            <Box
              bgcolor="#4caf50"
              py={0.3}
              px={1}
              color="#fff"
              borderRadius={4}
            >
              <b>130</b>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}

export default Nike;
