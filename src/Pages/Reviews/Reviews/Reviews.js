import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Review from "../Review/Review";

const Reviews = () => {
  const { service_id, _id } = useLoaderData();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service_id=${_id}`)
      .then((res) => res.json())

      .then((data) => {
        setReviews(data);
      });
  }, [_id]);
  return (
    <div className="">
      <div className="grid gap-4 grid-cols-1  mx-20 justify-items-center">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
