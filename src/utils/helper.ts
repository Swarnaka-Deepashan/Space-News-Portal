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

export const generateTimeLabel = (isExtraSmallScreen:boolean) => {

    //random digit between 1 and 5
  const randomInt = Math.floor(Math.random() * 5) + 1;

  if (randomInt === 1) {
    return isExtraSmallScreen ? "1 min read" : "1 minute read" ;
  } else {
    return isExtraSmallScreen
      ? `${randomInt} mins read`
      : `${randomInt} minutes read`;
  }
};
