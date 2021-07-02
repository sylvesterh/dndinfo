import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const ClassInfo = (props) => {
  const params = useParams();
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({
    name: "",
    hp: "",
  });
  const url = "https://www.dnd5eapi.co/api/classes/";

  useEffect(() => {
    const strClass = params.classID;
    const classUrl = `${url}${strClass}`;

    const makeApiCall = async () => {
      setStatus("pending");
      try {
        const res = await fetch(classUrl);
        const json = await res.json();
        setData({
          name: json.name,
          hp: json.hit_die,
        });
      } catch (error) {
        setStatus("error");
        alert(error);
      } finally {
        setStatus("resolved");
        return;
      }
    };
    makeApiCall();
  }, []);

  const showDetails = (status) => {
    if (status === "idle") {
      return "Please enter a currency";
    }
    if (status === "pending") {
      return "Loading...";
    }
    if (status === "resolved") {
      return;
    }
    if (status === "error") {
      return;
    }
  };

  return (
    <div>
      <div className="class-details">
        {showDetails(status)}
        <h4>Name: {data.name}</h4>
        <p>Hit Points: {data.hp}</p>
      </div>
    </div>
  );
};

export default ClassInfo;
