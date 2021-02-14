import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallToActionOutlinedIcon from "@material-ui/icons/CallToActionOutlined";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";
import CropRotateOutlinedIcon from "@material-ui/icons/CropRotateOutlined";

export const pages = [
  {
    key: 1,
    name: "Clothes",
    icon: <CropRotateOutlinedIcon />
  },
  {
    key: 2,
    name: "Accessories",
    icon: <ControlPointOutlinedIcon />
  },
  {
    key: 3,
    name: "Shoes",
    icon: <CallToActionOutlinedIcon />
  },
  {
    key: 4,
    name: "About Us",
    icon: <InfoOutlinedIcon />
  },
  {
    key: 5,
    name: "Contact Us",
    icon: <ContactSupportOutlinedIcon />
  },
  {
    key: 6,
    name: "Events",
    icon: <EventAvailableOutlinedIcon />
  },
  {
    key: 7,
    name: "Cart",
    icon: <ShoppingCartOutlinedIcon />
  }
];
