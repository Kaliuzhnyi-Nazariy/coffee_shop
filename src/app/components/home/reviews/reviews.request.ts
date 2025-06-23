export const getReviews = async () => {
  const response = await fetch(
    "https://6857ae7521f5d3463e55db64.mockapi.io/api/cafe/comments/comment",
    { method: "GET" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return await response.json();
};
