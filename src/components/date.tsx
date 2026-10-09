"use client";

const Date = () => {
  const formattedDate = new globalThis.Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return <span>{formattedDate}</span>;
};

export default Date;
