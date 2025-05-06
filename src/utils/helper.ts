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

export function getGreeting(): string {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon';
  } else if (hour >= 17 && hour < 21) {
    return 'Good Evening';
  } else {
    return 'Good Night';
  }
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}