import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Testimotional from "../../components/Testimotional";

import { Link } from "react-router-dom";

function Books({ search, setSearch, books, setBooks }) {
  /* function handleClick() {
    
  } */
  return (
    <div >
      <Navbar />
      <div className="text-center pt-6 duration-200  bg-white dark:bg-gray-950 dark:text-white">
        {/* input hissesi */}
        <h1 className="text-3xl font-bold py-2">Search a book..</h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-full max-w-[220px] h-[35px] p-[12px] rounded-xl 
          border-2 outline-none duration-200 shadow-xl dark:text-black  "
        />
      </div>
      <div className="p-6 duration-200  bg-white dark:bg-gray-950 dark:text-white">
        {/* card hissesi */}
        {books.length > 0 ? (
          <div className="flex justify-center flex-wrap">
            {books.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              return (
                <div key={book.id} className="p-6">
                  <Link to={`/${book.id}?id=${book.id}`}>
                    <div className="relative text-center w-[300px] h-[400px] mb-2.5 p-6 rounded-2xl border-2">
                      <img
                        className="h-[300px] rounded shadow-2xl"
                        src={thumbnail}
                        alt=""
                      />
                      <div className="flex flex-col mt-1">
                        <h3 className="text-sm mb-1 duration-200 dark:text-white">
                          {book.volumeInfo.title}
                        </h3>
                        <p className="duration-200 font-semibold dark:text-white">
                          {book.volumeInfo.authors?.join(", ")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            {/* <div>
              <button onClick={handleClick}>More</button>
            </div> */}
          </div>
        ) : (
          <p>No books found</p>
        )}
      </div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <Testimotional />
        <div className="dark:bg-gray-950 duration-200 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Books;
