"use client";

const Date = () => {
  const today = new globalThis.Date();
  const date = today.toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <>{date}</>;
};

export default Date;
