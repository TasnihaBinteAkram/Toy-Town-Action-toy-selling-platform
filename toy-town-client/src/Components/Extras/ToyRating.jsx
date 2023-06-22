import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyRating = ({children}) => {
  return (
    <span className="mt-auto inline-flex text-base font-semibold">
      <Rating style={{ maxWidth: 100 }} value={children} readOnly />
      <span className="ml-1">{children}</span>
    </span>
  );
};

export default ToyRating;