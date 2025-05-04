export const formatPublishedDate = (isoDate: string) => {
  // fallbacks
  if (typeof isoDate !== "string" || !isoDate.trim()) {
    return "Invalid date";
  }

  const date = new Date(isoDate);

  // fallbacks
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
