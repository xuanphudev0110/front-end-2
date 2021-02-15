import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardMedia } from "@material-ui/core";
import { photos } from "../../Data/events";
import content from "../../Files/Images/bg-content.png";
import icon from "../../Files/Images/icon/title-icon.png";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  content: {
    background: `url("${content}")`,
    padding: 20
  },
  icon: {
    width: theme.spacing(12),
    height: 10,
    margin: theme.spacing(1, 0)
  }
}));
export default function LightBox() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Grid container direction="column" alignItems="center">
        <OrangeTypography variant="h5">
          <b>Event Venue</b>
        </OrangeTypography>
        <CardMedia
          component="img"
          image={icon}
          title="Icon"
          className={classes.icon}
        />
        <ColorTextTypography paragraph>
          Event venue location info and gallery
        </ColorTextTypography>
      </Grid>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
