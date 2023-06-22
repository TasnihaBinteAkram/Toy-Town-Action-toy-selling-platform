import React, { useContext, useEffect, useState } from "react";
import Banner from "../Shared/Banner";
import {
  HiArrowNarrowDown,
  HiArrowNarrowLeft,
  HiArrowNarrowUp,
} from "react-icons/hi";
import MyToysRow from "../Components/Rows/MyToysRow";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import LoadSpinner from "../Components/Spinner/LoadSpinner";
import { Helmet } from "react-helmet-async";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [update, setUpdate] = useState(false);
  const [sortBy, setSortBy] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    setLoading(!loading);
    fetch(
      `https://toy-town-server-sigma.vercel.app/mytoys?email=${user.email}&sortby=${sortBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [update, sortBy, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-town-server-sigma.vercel.app/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              setUpdate(!update);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const goBack = () => {
    window.history.go(-1);
  };
  return (
    <>
      <Helmet>
        <title>ToyTown | My Toys</title>
      </Helmet>
      <Banner>My Added Toys</Banner>
      {loading && <LoadSpinner></LoadSpinner>}
      <section className="mx-12 max-w-screen-xl lg:mx-auto mt-16 lg:mt-20">
        <div className="my-10 flex justify-between">
          <p
            onClick={goBack}
            className="text-cyan-600 font-semibold cursor-pointer"
          >
            <HiArrowNarrowLeft className="inline-flex "></HiArrowNarrowLeft>{" "}
            Back
          </p>
          <div className="flex items-center gap-1">
            <span>Sort By Price:</span>
            <button
              onClick={() => setSortBy(-1)}
              className="border-2 rounded-md text-cyan-600 p-[1px]"
            >
              <HiArrowNarrowDown></HiArrowNarrowDown>
            </button>
            <button
              onClick={() => setSortBy(1)}
              className="border-2 rounded-md text-cyan-600 p-[1px]"
            >
              <HiArrowNarrowUp></HiArrowNarrowUp>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table  w-full">
            {/* head */}
            <thead>
              <tr>
                {/* <th></th> */}
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Detail</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.map((toy) => (
                <MyToysRow
                  key={toy._id}
                  toy={toy}
                  handleDelete={handleDelete}
                ></MyToysRow>
              ))}
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

export default MyToys;
