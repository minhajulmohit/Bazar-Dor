"use client";

import { useEffect, useState } from "react";

const Date = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new globalThis.Date();

    setDate(
      today.toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
      }),
    );
  }, []);

  return <>{date}</>;
};

export default Date;
