import React from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "../Reviews/AddReview/AddReview";

import Reviews from "../Reviews/Reviews/Reviews";

const ServiceDetail = () => {
  const service = useLoaderData();
  const { img, description, price, title } = service;
  return (
    <div className="grid justify-items-center">
      <div className="w-3/5 rounded-md shadow-md  dark:text-gray-900">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold ">{title}</h2>
            <p>
              <span className="text-lg font-bold text-red-500">Price:</span> $
              {price}
            </p>

            <p className="dark:text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      <AddReview></AddReview>
      <Reviews></Reviews>
    </div>
  );
};

export default ServiceDetail;
