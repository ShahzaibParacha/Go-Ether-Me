import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Projects() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  async function fetchItems() {
    const allProjects = await fetch("http://localhost:5000/projects");
    const items = await allProjects.json();
    console.log(items);
    setItems(items.allProjects);
  }

  function displayCard(item: any) {
    return (
      <Link to={`/project/${item["ID"]}`}>
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date">{item['main_category']}</span>
            <h2>{item["name"]}</h2>
            <p>{item["vision"]}</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">${item["goal"]}</div>
              <div className="type">Target</div>
            </div>
            <div className="stat border">
              <div className="value">${item["pledged"]}</div>
              <div className="type">Amassed</div>
            </div>
            <div className="stat">
              <div className="value">{item["backers"]}</div>
              <div className="type">Beleivers</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="projectbody">
      <header>
        <h1>Projects</h1>
      </header>
      <div className="wrapper">
        {items.map((item: any) =>
          displayCard(item)
        )}
      </div>
    </div>
  );
}

export default Projects;
