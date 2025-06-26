export const getNews = async () => {
  const res = await fetch(
    "https://6857ae7521f5d3463e55db64.mockapi.io/api/cafe/comments/news",
    { method: "GET" }
  );

  if (!res.ok) throw new Error("Failed to fetch news");

  return await res.json();
};
