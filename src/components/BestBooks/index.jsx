import React, { useEffect, useState } from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

/* const Books = [
  {
    id: 1,
    img: Img1,
    title: "His Life",
    description:
      "Explore the compelling story of a life well-lived, full of experiences and achievements that inspire. Discover the moments and milestones that define this extraordinary journey.",
  },
  {
    id: 2,
    img: Img2,
    title: "Who's there",
    description:
      "Meet the influential figures and notable personalities featured in our collection. Learn about their contributions and the impact they've made in their respective fields.",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description:
      "Delve into the captivating narrative of the Lost Boy, a journey filled with adventure, self-discovery, and unexpected twists. Follow the path of a character who navigates through challenges to uncover profound truths.",
  },
]; */
const apiKey = "AIzaSyAU-5Q4li3J5Uk31okk7CEvMGFa8ivxmxY";

function BestBooks({ handleOrderPopup }) {
  const [search, setSearch] = useState("nietzsche");
  const [books, setBooks] = useState([]);

  async function fetchBooks(query) {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=3`
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
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Discover our handpicked selection of the best books across all
              genres.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {books.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              return (
                <div
                  key={book.id}
                  data-aos="zoom-in"
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                   dark:hover:bg-primary hover:text-white relative
                    shadow-xl duration-high group max-w-[300px] h-[350px] "
                >
                  <div className="h-[100px]">
                    <img
                      src={thumbnail}
                      alt=""
                      className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-full flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="text-xl font-bold line-clamp-1">
                      {book.volumeInfo.title}
                    </h1>
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {book.volumeInfo.description}
                    </p>
                    <button
                      className="bg-primary hover:scale-105 duration-300
                       text-white py-1 px-4 rounded-full mt-4 
                        group-hover:bg-white group-hover:text-primary"
                      onClick={handleOrderPopup}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestBooks;
