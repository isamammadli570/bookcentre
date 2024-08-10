import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooksByID } from "../../services/bookApi";

function Details() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");

  const { data: book } = useQuery({
    queryKey: ["books", id],
    queryFn: () => getBooksByID(id),
  });

  return (
    <div className="dark:bg-gray-950 duration-200 ">
      <div className="bg-white dark:bg-gray-950 dark:text-white duration-200 ">
        <div className="app w-full max-w-7xl md:m-[100px] border shadow-2xl ">
          {book?.map((detail) => {
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
        </div>
      </div>
    </div>
  );
}

export default Details;
