import { useState } from "react";

import videos from "./data/videos";

import Card from "./components/Card";

import FilterBar from "./components/FilterBar";

import "./styles.css";

function App() {

  const [search, setSearch] = useState("");

  const [area, setArea] = useState("Todos");

  const [format, setFormat] = useState("Todos");

  const filteredVideos = videos.filter((video) => {

    const matchesSearch =
      video.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesArea =
      area === "Todos" ||
      video.area === area;

    const matchesFormat =
      format === "Todos" ||
      video.format === format;

    return (
      matchesSearch &&
      matchesArea &&
      matchesFormat
    );

  });

  return (

    <div className="container">

      <nav className="navbar">

        <h2>LearnStream</h2>

        <div className="nav-links">

          <span>Inicio</span>

          <span>Conferencias</span>

          <span>Categorías</span>

        </div>

      </nav>

      <h1>Explora Conferencias</h1>

      <FilterBar
        search={search}
        setSearch={setSearch}
        area={area}
        setArea={setArea}
        format={format}
        setFormat={setFormat}
      />

      <div className="cards-container">

        {
          filteredVideos.length > 0 ? (

            filteredVideos.map((video) => (

              <Card
                key={video.id}
                video={video}
              />

            ))

          ) : (

            <p className="no-results">
              No se encontraron resultados
            </p>

          )
        }

      </div>

    </div>

  );
}

export default App;