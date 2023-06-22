import React, { useContext, useEffect } from "react";
import Banner from "../Shared/Banner";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const character = form.character.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const detail = form.detail.value;
    const photo = form.photo.value;

    const toy = {
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
    };
    fetch("https://toy-town-server-sigma.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Succesfully added data");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>ToyTown | Add Toy</title>
      </Helmet>
      <Banner>Add A Toy</Banner>
      <section className="mx-12 max-w-screen-xl lg:mx-auto mt-16 lg:mt-20">
        <h1 className="section-title">Add Toy Information</h1>
        <div className="mt-10 mx-auto bg-base-200 px-4 lg:px-32 py-10 rounded-md">
          <form onSubmit={handleAddToy}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="toy name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
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
                  <span className="label-text">Category</span>
                </label>
                <input
                  name="category"
                  type="text"
                  placeholder="category"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Character</span>
                </label>
                <input
                  name="character"
                  type="text"
                  placeholder="character name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="rating"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  name="quantity"
                  type="number"
                  placeholder="quantity"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  defaultValue={user?.displayName ? user.displayName : "name"}
                  name="seller"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  defaultValue={user?.email ? user.email : email}
                  name="email"
                  type="email"
                  placeholder="email"
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
                  placeholder="detail of toy"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
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

export default AddToy;
