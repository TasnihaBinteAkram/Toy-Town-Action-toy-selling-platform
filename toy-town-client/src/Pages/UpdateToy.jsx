import React, { useContext, useEffect } from "react";
import Banner from "../Shared/Banner";
import { useLoaderData } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateToy = () => {
  const toyInfo = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {user} = useContext(AuthContext)
  const {
    _id,
    quantity,
    detail,
    price,
  } = toyInfo;
    
  const goBack = () => {
    window.history.go(-1);
  };

  const handleUpdateToy = (event) => {

    event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        
        const toy = {quantity,detail,price}
        fetch(`https://toy-town-server-sigma.vercel.app/updatetoy/${_id}`,{
            method: "PATCH",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                toast.success('Succesfully updated data')
            };
        })
  };
        
  return (
    <>
    <Helmet>
            <title>ToyTown | Update Toy</title>
        </Helmet>
      <Banner>Update Toy Info</Banner>
      <section className="mx-12 max-w-screen-xl lg:mx-auto mt-16 lg:mt-20">
      <p onClick={goBack} className="text-cyan-600 font-semibold cursor-pointer">
        <HiArrowNarrowLeft className="inline-flex "></HiArrowNarrowLeft> Back
      </p>
        <h1 className="section-title mt-8">Update Toy Information</h1>
        <div className="mt-10 lg:w-2/3 mx-auto bg-base-200 px-4 lg:px-32 py-10 rounded-md">
          <form onSubmit={handleUpdateToy}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  defaultValue={price}
                  type="number"
                  step="0.01"
                  min="0"
                  max="100000"
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  name="quantity"
                  defaultValue={quantity}
                  type="number"
                  placeholder="quantity"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail</span>
                </label>
                <input
                  name="detail"
                  type="text"
                  defaultValue={detail}
                  placeholder="detail of toy"
                  className="input input-bordered"
                />
              </div>
            <div className="form-control mt-8">
              <input type="submit" value="Submit" className="my-btn" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateToy;
