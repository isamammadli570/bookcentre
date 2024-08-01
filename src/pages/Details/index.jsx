import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Testimotional from "../../components/Testimotional";

function Details() {
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
    <div className="dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-950 dark:text-white">
        <Navbar />
        <div className="app w-full max-w-7xl md:m-[100px] border shadow-2xl ">
          {details?.map((detail) => {
            let thumbnail =
              detail.volumeInfo.imageLinks &&
              detail.volumeInfo.imageLinks.smallThumbnail;
            return (
              <div
                key={detail.id}
                className="flex justify-around flex-wrap p-[30px] "
              >
                <div className="max-w-lg min-w-72 overflow-hidden m-[25px] ">
                  <img
                    className="w-full h-full max-h-96 block object-cover"
                    src={thumbnail}
                    alt=""
                  />
                </div>

                <div className="m-[25px] max-w-lg min-w-72 ">
                  <div className="mb-[15px] ">
                    <h2 className="uppercase tracking-widest">
                      <span className="font-bold">Book Name:</span>{" "}
                      {detail.volumeInfo.title}
                    </h2>
                    <div className="pt-6">
                      <p className="text-red-500">
                        <span className="font-bold">Author: </span>
                        {detail.volumeInfo.authors}
                      </p>
                      <p className="text-green-900">
                        <span className="font-bold">Category: </span>
                        {detail.volumeInfo.categories}
                      </p>
                      <div className="pt-6">
                        <p>{detail.volumeInfo.description}</p>
                      </div>
                      <div className="pt-6">
                        <p className="font-bold">
                          Published Date: {detail.volumeInfo.publishedDate}
                        </p>
                        <p>
                          <span className="font-bold">Publisher: </span>
                          {detail.volumeInfo.publisher}
                        </p>
                      </div>
                      <div className="pt-6">
                        <p>
                          Link:
                          <a
                            className="font-black text-blue-500"
                            href={detail.volumeInfo.previewLink}
                          >
                            More information about the book
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <p>{details.id}</p> */}
        </div>
      </div>
      <div className="dark:text-white dark:bg-gray-900">
        <Testimotional />
        <Footer />
      </div>
    </div>
  );
}

export default Details;
