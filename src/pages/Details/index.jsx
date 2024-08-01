import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useSearchParams } from "react-router-dom";

function Details() {
  const [search, setSearch] = useState("nietzsche");
  const [books, setBooks] = useState([]);

  const [details, setDetails] = useState();

  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");
  console.log(id);

  useEffect(
    function () {
      async function fetchDetails() {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${id}`
        );
        const { items } = await res.json();
        console.log(items);
        setDetails(items);
      }
      fetchDetails();
    },
    [id]
  );

  return (
    <div>
      <Navbar />
      <p>detail</p>
      {details?.map((detail) => {
        return (
          <div key={detail.id}>
            <p>{detail.id}</p>
          </div>
        );
      })}
      {/* <p>{details.id}</p> */}
    </div>
  );
}

export default Details;
