import React, { useEffect, useState } from "react";
import Banner from "../Shared/Banner";
import { useLoaderData, useNavigation } from "react-router-dom";
import AlltoyRow from "../Components/Rows/AlltoyRow";
import { toast } from "react-hot-toast";
import LoadSpinner from "../Components/Spinner/LoadSpinner";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  const [toys, setToys] = useState(allToys);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigation();
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.search.value.toLowerCase();
    if (searchText.length > 0) {
      fetch(`https://toy-town-server-sigma.vercel.app/alltoys/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setToys(data)});
    } else {
      toast.error("Try any name!");
    }
  };

  return (
    <>
      <Banner>All Toys</Banner>
      <Helmet>
        <title>ToyTown | All Toys</title>
      </Helmet>
      {navigate.state == "loading" && <LoadSpinner></LoadSpinner>}
      <section className="mx-12 max-w-screen-xl lg:mx-auto mt-16 lg:mt-20">
        <div className="my-10 flex justify-between">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              name="search"
              placeholder="Search by toy name"
              className="border px-4 rounded-s-md"
            />
            <input
              type="submit"
              className="text-white px-6 py-2 rounded-e-md bg-cyan-600 font-semibold hover:bg-cyan-800"
              value="Search"
            />
          </form>
          <div className="flex gap-2">
            <span>Sort By:</span>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Category
              </option>
              <option>Marvel</option>
              <option>Starwars</option>
              <option>Transformers</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, i) => (
                      <AlltoyRow key={toy._id} toy={toy} index={i}></AlltoyRow>
                    ))
               }
            </tbody>
          </table>
        </div>
        {toys.length == 0 && (
          <div className="text-center mt-24">
            <h1 className="text-6xl font-bold text-slate-300">NO TOYS FOUND</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default AllToys;