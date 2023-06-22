import React from "react";
import { Link } from "react-router-dom";

const AlltoyRow = ({ toy, index }) => {
  const {_id, seller, name, category, price, quantity } = toy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller?seller:"Unknown"}</td>
      <td>{name}</td>
      <td>{category.toUpperCase()}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toys/${_id}`}>
          <button className="my-btn-outline">Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AlltoyRow;
