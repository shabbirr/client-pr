import "./About.css";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="imgAbout">
        <img src={require("../../images/construction-sites.jpg")} alt="..." />
      </div>
      <div className="contentAbout">
        <h1 className="heading">
          <span className="heading_text">A</span>bout Us
        </h1>
        <article>
          PREngineerrs is the pioneer in introducing concrete spacers (also
          known as cover blocks) in India.
          <br />
          <br />
          Over the years PREngineers has become benchmark of high quality in
          fibre reinforced concrete spacers / cover blocks.
          <br />
          <br />
          With multiple tests conducted at reputed domestic and international
          test labs, PREngineer cover blocks have been approved and used in
          various prestigious projects.
        </article>
      </div>
    </div>
  );
}
