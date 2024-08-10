import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooksApi } from "../../services/bookApi";
import { useState } from "react";
import Spinner from "../../components/Spinner";

function Books() {
  const [search, setSearch] = useState("nietzsche");

  const { data: book, isLoading } = useQuery({
    queryKey: ["books", { search }],
    queryFn: () => getBooksApi(search),
  });

  return (
    <div>
      <div className="text-center pt-6 duration-200  bg-white dark:bg-gray-950 dark:text-white">
        <h1 className="text-3xl font-bold py-2">Search a book..</h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search.."
          className="w-full max-w-[220px] h-[35px] p-[12px] rounded-xl 
          border-2 outline-none duration-200 shadow-xl dark:text-black  "
        />
      </div>
      {isLoading ? (
        <div className="h-[35rem] flex justify-center pt-40 ">
          <Spinner />
        </div>
      ) : (
        <div className="p-6 duration-200  bg-white dark:bg-gray-950 dark:text-white">
          <div className="flex justify-center flex-wrap">
            {book?.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              return (
                <div key={book.id} className="p-6">
                  <div className="relative text-center w-[250px] h-[380px] mb-2.5 p-6 rounded-2xl border-2">
                    <Link to={`/${book.id}?id=${book.id}`}>
                      <div>
                        <img
                          className="h-[250px] rounded shadow-2xl"
                          src={thumbnail}
                          alt=""
                        />
                        <div className="flex flex-col mt-1">
                          <h3 className="text-sm line-clamp-1 mb-1 duration-200 dark:text-white">
                            {book.volumeInfo.title}
                          </h3>
                          <p className="duration-200 line-clamp-1 font-semibold dark:text-white">
                            {book.volumeInfo.authors?.join(", ")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {!book?.length && (
            <div className="flex uppercase justify-center mt-32 items-center text-2xl text-tertiary_light gap-4">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Books;
