import * as React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import { FaDog } from "react-icons/fa";

const customIcons = {
  1: {
    icon: <FaDog />,
    label: "Small",
    fontSize: "1rem",
  },
  2: {
    icon: <FaDog />,
    label: "Medium",
    fontSize: "2rem",
  },
  3: {
    icon: <FaDog />,
    label: "Large",
    fontSize: "3rem",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
  );
}
