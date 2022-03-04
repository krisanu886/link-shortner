import React, { useEffect } from "react";
import db from "./firebase";
import { useParams } from "react-router-dom";

const Redirect = () => {
  const { short } = useParams();
  useEffect(() => {
    let query = db.collection("urls").where("short", "==", short);
    query.onSnapshot((data) => {
      if (data.query) {
        alert("URL not found");
      }
      let finalData = data.docs[0].data();
      window.location.href = finalData.url;
    });
  }, [short]);
  return <></>;
};
export default Redirect;
