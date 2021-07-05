import React from "react";
import { Link } from "react-router-dom";
import availClasses from "./list.json";

const Class = () => {
  // const [selectClass, setSelectClass] = useState([]);
  // const url = "https://www.dnd5eapi.co/api/classes/";

  // useEffect(() => {
  //   const makeApiCall = async () => {
  //     const res = await fetch(url);
  //     const json = await res.json();
  //     console.log(json);

  //     setSelectClass(json);
  //   };
  //   makeApiCall();
  // }, []);

  // return (
  //   <div>
  //     {.map((item) => {
  //       return (<div className="classID" key={item.index}>
  //         <h4>
  //           <Link to={"/classes/" + item.index}>{item.name}</Link>
  //         </h4>
  //       </div>)
  //     })}
  //   </div>
  // )

  let list = availClasses.map((item) => {
    return (
      <div className="classID" key={item.index}>
        <h4>
          <Link to={"/classes/" + item.index}>{item.name}</Link>
        </h4>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Class;
