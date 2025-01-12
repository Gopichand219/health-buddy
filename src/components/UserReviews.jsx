import React from "react";

const UserReviews = ({ reviews }) => (
  <section className="p-4">
    <h2 className="text-lg font-bold mb-4">What our Users say</h2>
    <div className="flex space-x-4 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-80 p-4 border rounded-lg shadow bg-white"
        >
          <div className="flex items-center text-yellow-500 mb-2">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>
          <p className="text-sm text-gray-600 mb-4">"{review.content}"</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p>{review.days}</p>
            <p>{review.location || "Unknown Location"}</p>
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-800">{review.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default UserReviews;
