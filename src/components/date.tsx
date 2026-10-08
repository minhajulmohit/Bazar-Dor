"use client";

const Date = () => {
  const today = new globalThis.Date();
  const date = today.toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return <>{date}</>;
};

export default Date;
