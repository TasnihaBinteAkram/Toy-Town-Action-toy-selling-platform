import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import ToyRating from "../Components/Extras/ToyRating";
import { Helmet } from "react-helmet-async";

const ToyDetails = () => {
  const toyDetail = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {
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
  } = toyDetail;

  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="px-10 lg:px-0 max-w-screen-xl mx-auto mt-20">
      <Helmet>
        <title>ToyTown | Toy Details</title>
      </Helmet>
      <p
        onClick={goBack}
        className="text-cyan-600 font-semibold cursor-pointer"
      >
        <HiArrowNarrowLeft className="inline-flex "></HiArrowNarrowLeft> Back
      </p>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 w-2/3 mx-auto px-4 py-8 shadow-lg">
        <div className="lg:w-2/3 mx-auto">
          <img src={photo} alt={name} />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-cyan-800">
              {name}
            </h1>
            <p className="font-medium text-cyan-800">
              {category?category.toUpperCase():""} Hot Toys
            </p>
            <div>
              <p className="text-sm font-medium text-cyan-800">
                Sold By: {seller}
              </p>
              <p className="text-sm font-medium text-cyan-800">
                Contact: {email}
              </p>
            </div>
          </div>
          <div>
            <p className="text-3xl font-medium text-amber-500">${price}</p>
            <ToyRating rating={rating}></ToyRating>
            <p className="font-medium text-cyan-800">Available: {quantity}/pc</p>
            <p className="font-sans text-cyan-800">Description: {detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
