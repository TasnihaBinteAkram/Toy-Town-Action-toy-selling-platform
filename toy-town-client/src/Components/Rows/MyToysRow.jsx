import React from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyToysRow = ({ toy , handleDelete}) => {
  const {
    _id,
    name,
    category,
    character,
    rating,
    quantity,
    seller,
    email,
    detail,
    photo,
    price,
  } = toy;

  return (
    <tr>
      {/* <th></th> */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img
                src={photo}
                className="object-cover object-top"
                alt={"image of "+name}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{category.toUpperCase()}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        {detail.slice(0, 25)}
        <br />
        {detail.slice(25, 45) + `...`}
      </td>
      <td>{rating}</td>
      <td className="space-x-2">
        <Link to={`/updatetoy/${_id}`}>
          <button className="my-btn-outline">
            <HiPencilAlt></HiPencilAlt>
          </button>
        </Link>
        <button onClick={()=>handleDelete(_id)} className="my-btn-outline">
          <HiTrash></HiTrash>
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
