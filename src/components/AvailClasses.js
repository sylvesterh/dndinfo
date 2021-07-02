import React, { useState, useEffect } from "react";

const AvailClasses = () => {
  const [avail, setAvail] = useState([]);
  const url = "https://www.dnd5eapi.co/api/classes/";

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setAvail(json);
    };
    makeApiCall();
  }, []);

  return <>{avail}</>;
};

export default AvailClasses;
