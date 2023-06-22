import React from "react";
import "./Home.css";
import sampleFile from "../../sampleFile.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/fontawesome-free-solid";

export default function Home() {
  return (
    <div className="hero" id="home">
      <div className="content">
        <h1>
          our mission is to create a <span className="textHero">better</span>{" "}
          future
        </h1>
        <div className="btn-download">
          <a href={sampleFile} target="_blank" rel="noreferrer">
            Download Brochure
          </a>
          <FontAwesomeIcon icon={faDownload} />
        </div>
      </div>
    </div>
  );
}
