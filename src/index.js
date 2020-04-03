import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";
import axios from "axios";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setBooks(response.data);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            const date = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");

            return (
              <div className="book">
                <h3>Book Number: {index + 1}</h3>
                <h2>Book Name: {book.name}</h2>

                <div className="details">
                  <p>👨: Author/Authors: {authors}</p>
                  <p>📖: Number of pages: {book.numberOfPages}</p>
                  <p>🏘️: Book Country: {book.country}</p>
                  <p>⏰: Release date: {date}</p>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
