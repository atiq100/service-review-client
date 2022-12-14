import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { img, description, price, title, _id } = service;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md  dark:text-gray-900">
       <PhotoProvider>
       <PhotoView src={img}>
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        </PhotoView>
       </PhotoProvider>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold ">{title}</h2>
            <p>
              <span className="text-lg font-bold text-red-500">Price:</span> $
              {price}
            </p>

            <p className="dark:text-gray-600">
              {description.length > 100 ? (
                <>
                  {description.slice(0, 100) + "..."}{" "}
                  <Link to={`/service/${_id}`}>
                    {" "}
                    <FaArrowRight className="ml-56 text-xl text-sky-500/100"></FaArrowRight>{" "}
                  </Link>{" "}
                </>
              ) : (
                description
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
