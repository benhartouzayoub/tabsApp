import { useState } from "react";
import "./styles.css";
import data from "./data/data";

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div className="allContent">
      <header>
        <div>
          <h1>OUR SERVICES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elits</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
           TAB 1

          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            TAB 2
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            TAB 3
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {data[activeContentIndex].map((item,index) => (
                <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
