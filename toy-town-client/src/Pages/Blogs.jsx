import React, { useEffect } from "react";
import LoadSpinner from "../Components/Spinner/LoadSpinner";
import faq from "../assets/faq/FAQs.gif";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Helmet>
        <title>ToyTown | Blogs</title>
      </Helmet>
      <div className="mx-12 max-w-screen-xl lg:mx-auto mt-8 lg:mt-10">
        <h1 className="section-title">Welcome to our blogs</h1>
        <div className="lg:flex lg:items-center lg:gap-4">
          <div className="sm:w-full lg:w-1/2 ">
            <img src={faq} className="" alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mt-16 mb-4 w-full">
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-cyan-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content text-start">
                  <p>
                    <strong>Access Token</strong>
                    is credential issued to client after successful authentication. It gives the client the authorization to access specific resources or perform certain actions on the platform. These have a short expiration time.
                     <strong>Refresh Tokens </strong>
                    are provided when access token expires. It is a long lived credentials provided to userss after successful authentication.
                    <br />
                    Access tokens are typically stored in memory. For refresh tokens it's recommended to store them in HTTP only cookie or encrypted local storage.
                  </p>
                </div>
              </div>
              <div
                tabIndex={1}
                className="collapse collapse-arrow border border-cyan-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                Compare SQL and NoSQL databases
                </div>
                <div className="collapse-content text-start">
                  SQL and NoSQL databases are two different types of database management systems, each with its own strengths and use cases. 
                  <ol>
                    <li>
                        <strong>1. SQL</strong> stores data in Tables with columns and rows.
                        <strong> NoSQL</strong> stores data in key-value pairs, documents etc
                    </li>
                    <li>
                        <strong>2. SQL</strong> databases are vertically scalable.
                        Where <strong>NoSQL</strong> are horizontally scalable
                    </li>
                    <li>
                        <strong>3. SQL</strong> databases use SQL language for query.
                        <strong> NoSQL</strong> uses different query languages based on their data model.
                    </li>
                    <li>
                        <strong>4. SQL</strong> databases are well-suited for applications that require complex querying.
                        <strong> NoSQL</strong>  databases are often used in scenarios involving large-scale data storage, real-time analytics etc.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-cyan-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                What is express js? What is Nest JS?
                </div>
                <div className="collapse-content text-start">
                  <p>
                    <strong>Express js</strong> is a web application framework of Node.js. Express.js provides tools for handling requests and responses, routing, middleware, and more.
                  </p>
                  <strong>NestJS</strong> is a progressive, TypeScript-based web application framework built on top of Node.js. It aims to provide an efficient and scalable architecture for building server-side applications.
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-cyan-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content text-start">
                  <p>
                    <strong>MongoDB aggregate</strong> is a function used to perform advanced data processing and analysis operations on collections of documents. It allows user to perform complex queries, transformations, aggregations, and computations on the data stored in MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  );
};

export default Blogs;
