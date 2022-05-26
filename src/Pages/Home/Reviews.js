import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-shelf-74413.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center my-14 text-blue-400 font-bold">
        Our Clients Review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
