import React from "react";
import "./styles.css";
import { useState } from "react";
const GadgetDB = {
  Laptop: [
    { name: "Mackbook Pro", rating: "4.5/5" },
    { name: "Thinkpad carbon X1", rating: "3.5/5" }
  ],

  Mobile: [
    {
      name: "Iphone 12",
      rating: "5/5"
    },
    {
      name: "Iphone 11",
      rating: "4.5/5"
    },
    {
      name: "Iphone XR",
      rating: "4/5"
    },
    {
      name: "OnePlus 9",
      rating: "4.5/5"
    },
    {
      name: "Samsung S20 FE",
      rating: "4/5"
    }
  ],
  Vaccine: [
    {
      name: "Covishield",
      rating: "5/5"
    },
    {
      name: "Covaxin",
      rating: "4.5/5"
    },
    {
      name: "Sputink-V",
      rating: "4.5/5"
    },
    {
      name: "Moderna",
      rating: "4/5"
    },
    {
      name: "Pfizer",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGadget, setGadget] = useState("Vaccine");
  let gadgetStyle = {
    cursor: "pointer",
    background: "#E5E7EB",
    borderRadius: "0.5rem",
    padding: "0.5rem  1rem",
    border: "1px solid black",
    margin: "1rem 0.3rem"
  };
  let gadetListStyle = {
    listStyle: "none",
    padding: "1rem",
    border: "1px solid #D1D5DB",
    width: "70%",
    margin: "1rem 0rem",
    borderRadius: "0.5rem"
  };
  function gadgetClickHandler(gadgetName) {
    setGadget(gadgetName);
  }
  return (
    <div className="App">
      <h1> Trending Recommends </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite recommendation from current trends. Select a
        category to get started{" "}
      </p>
      <div>
        {Object.keys(GadgetDB).map((gadgetName) => (
          <button
            onClick={() => gadgetClickHandler(gadgetName)}
            style={gadgetStyle}
          >
            {gadgetName}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {GadgetDB[selectedGadget].map((gadgetName) => (
            <li key={gadgetName.name} style={gadetListStyle}>
              {" "}
              <div style={{ fontSize: "larger" }}> {gadgetName.name} </div>
              <div style={{ fontSize: "smaller" }}> {gadgetName.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
