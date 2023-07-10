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
    <div className="flex flex-col gap-4 justify-between rounded-md w-96 h-[350px] bg-base-100 shadow-xl mx-auto py-6 px-4 border">
      <div className="h-1/2 w-full">
          <img
            src={photo}
            alt={'image of'+ name}
            className="h-full w-full object-contain"
          />
      </div>
      <div className="card-body py-2 h-full">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between">
          <p>${price}</p>
          <ToyRating>{rating}</ToyRating>
        </div>
        <div className="card-actions w-full mt-auto">
          <Link to={`/toys/${_id}`}>
            <button onClick={notify} className="my-btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
