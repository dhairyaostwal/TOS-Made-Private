import React from "react";
import Saly17 from "../public/images/Saly17.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem" }}>Sorry 😢 </h1>
      <div>
        <img className="App--Images" src={Saly17} />
      </div>
      <h2 style={{ fontSize: "1.4rem" }}>We're down for Maintenance 🛠</h2>
      <p style={{ fontSize: "1.3rem", marginTop: "-1rem" }}>
        Will be back soon :)
      </p>
      <div>
        <h1>WTH is TaramaOS?</h1>
        <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
          TaramaOS is not just a usual project. It aims to make your favourite
          restaurant even more efficient where all others algorithms like FCFS,
          SRTF, SJF, Round Robin etc. fail. So, the project started as a simple
          C++ program eventually turning into a web-app supported by Flask.
        </p>
      </div>

      <div>
        <h3>
          Always available at{" "}
          <a
            href="https://dhairyaostwal.netlify.app/"
            target="_blank"
            style={{ color: "#5352ED" }}
          >
            @dhairyaostwal
          </a>
        </h3>
      </div>
    </div>
  );
}
