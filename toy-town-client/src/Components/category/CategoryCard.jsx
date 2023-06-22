import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import ToyRating from "../Extras/ToyRating";
import { AuthContext } from "../../Providers/AuthProvider";

const CategoryCard = ({ toy }) => {
  const {user} = useContext(AuthContext)
  const { _id, name, price, rating, photo } = toy;
  const notify = () => {
    if(!user){
      toast.error('Sign In to view details');
    }
    
  }
  return (
    <div className="flex flex-col justify-between rounded-md w-96 h-[500px] bg-base-100 shadow-xl mx-auto">
      <div className="h-2/3 w-full py-4">
        <div className="h-full w-full">
          <img
            src={photo}
            alt={'image of'+ name}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="card-body py-2 h-1/3">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between">
          <p>${price}</p>
          <ToyRating>{rating}</ToyRating>
        </div>
        <div className="card-actions w-full">
          <Link to={`/toys/${_id}`}>
            <button onClick={notify} className="my-btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
