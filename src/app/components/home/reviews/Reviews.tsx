"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { getReviews } from "./reviews.request";
import { IReview } from "./review.type";

const ReviewsSection = () => {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState([] as IReview[]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const reviewsResponse = async () => {
        setReviews(await getReviews());
      };
      reviewsResponse();
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const pageBack = () => {
    if (page <= 1) {
      return;
    }

    setPage((prev) => prev - 1);
  };

  const pageForward = () => {
    if (page + 1 > reviews.length) {
      setPage(1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section className="mt-[45px] px-5">
      <h2 className="text-[18px] font-semibold w-[200px]">
        See what <span className="text-[#EC8B1E]">others are saying</span>.
      </h2>
      <div className="flex gap-[5px] mt-[22px] justify-center">
        <button
          onClick={() => pageBack()}
          disabled={page <= 1}
          className="disabled:opacity-50"
        >
          ←
        </button>
        {/* <Card /> */}
        {isLoading ? (
          "Loading..."
        ) : reviews.length > 0 && reviews[page - 1] ? (
          <Card review={reviews[page - 1]} />
        ) : (
          "No review available"
        )}
        <button onClick={() => pageForward()}>→</button>
      </div>
    </section>
  );
};

export default ReviewsSection;
