import React, { useState } from "react";
import "./styles.css";

var MoviesList = {
  Bollywood: [
    {
      name: "Shamshera",
      rating: "4.9/10 ⭐"
    },
    {
      name: "Sanju",
      rating: "7.6/10 ⭐"
    },
    {
      name: "Agneepath",
      rating: "6.9/10 ⭐"
    },
    {
      name: "Bahubali",
      rating: "8/10 ⭐"
    },
    {
      name: "The kashmir files",
      rating: "8.2/10 ⭐"
    }
  ],

  Hollywood: [
    {
      name: "Avatar",
      rating: "8.2/10 ⭐"
    },
    {
      name: "Avengers End-Game",
      rating: "8/10 ⭐"
    },
    {
      name: "Bullet Train",
      rating: "7.4/10 ⭐"
    },
    {
      name: "Joker",
      rating: "8.4/10 ⭐"
    },
    {
      name: "Green Book",
      rating: "8.4/10 ⭐"
    }
  ],

  Tollywood: [
    {
      name: "Pushpa",
      rating: "8.4/10 ⭐"
    },
    {
      name: "Magadheera",
      rating: "7.7/10 ⭐"
    },
    {
      name: "Mirchi",
      rating: "7.3/10 ⭐"
    },
    {
      name: "Arya",
      rating: "7.2/10 ⭐"
    },
    {
      name: "sarrainodu",
      rating: "8/10 ⭐"
    }
  ]
};

export default function App() {
  const [selectMovie, setMovies] = useState("Bollywood");
  function clickHandler(movie) {
    setMovies(movie);
  }

  return (
    <div className="App">
      <h1>Movies Diary</h1>

      <div>
        {Object.keys(MoviesList).map((Movie) => (
          <button
            onClick={() => clickHandler(Movie)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {Movie}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MoviesList[selectMovie].map((Movies) => (
            <li
              key={Movies.name}
              style={{
                listStyle: "none",
                backgroundColor: "#E5E7EB",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {Movies.name} </div>
              <div style={{ fontSize: "smaller" }}> {Movies.rating} </div>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}
