import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Testimotional from "../../components/Testimotional";

const apiKey = "AIzaSyAU-5Q4li3J5Uk31okk7CEvMGFa8ivxmxY";

function Books() {
  const [search, setSearch] = useState("nietzsche");
  const [books, setBooks] = useState([]);

  async function fetchBooks(query) {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=10`
    );
    const { items } = await res.json();
    console.log(items);
    setBooks(items || []);
  }

  useEffect(() => {
    if (search !== "") {
      fetchBooks(search);
    }
  }, [search]);

  return (
    <div>
      <Navbar />
      <div className="text-center pt-6 bg-white dark:bg-gray-950 dark:text-white">
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
      <div className="p-6 bg-white dark:bg-gray-950 dark:text-white">
        {/* card hissesi */}
        {books.length > 0 ? (
          <div className="flex justify-center flex-wrap">
            {books.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              return (
                <div key={book.id} className="p-6">
                  <div className="relative text-center w-[300px] h-[400px] mb-2.5 p-6 rounded-2xl border-2">
                    <img
                      className="h-[300px] rounded shadow-2xl"
                      src={thumbnail}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <h3 className="text-sm mb-3 dark:text-white">
                        {book.volumeInfo.title}
                      </h3>
                      <p className=" dark:text-white">
                        {book.volumeInfo.authors?.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No books found</p>
        )}
      </div>
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <Testimotional />
        <div className="dark:bg-gray-950">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Books;
