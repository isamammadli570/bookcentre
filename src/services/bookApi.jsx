const apiKey = "AIzaSyBbjWuSxjD4ZBIpl9o2TazEMiT0j7OvnGM";
const BASE_URL = "https://www.googleapis.com/books/v1/";

export async function getBooksApi(query) {
  const res = await fetch(`${BASE_URL}volumes?q=${query}&key=${apiKey}`);
  const { items } = await res.json();
  return items;
}

export async function getBooksByID(id) {
  const res = await fetch(`${BASE_URL}volumes?q=${id}`);
  const { items } = await res.json();
  return items;
}

export async function getBestBooksApi(query) {
  const res = await fetch(
    `${BASE_URL}volumes?q=${query}&key=${apiKey}&maxResults=3`
  );
  const { items } = await res.json();
  return items;
}

export async function getAllBooksApi(query) {
  const res = await fetch(
    `${BASE_URL}volumes?q=${query}&key=${apiKey}&maxResults=5`
  );
  const { items } = await res.json();
  return items;
}
