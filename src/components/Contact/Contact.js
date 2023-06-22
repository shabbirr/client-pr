import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <h1 className="heading">
          <span className="heading_text">C</span>ontact
        </h1>
        <h3>PREngineers (HEAD OFFICE)</h3>
        <article>
          <p>U-1/A, Madkaim Industrial Estate,</p>
          <p>Thane, Mumbai - 403404</p>
          <p>INDIA</p>
          <p className="text-contact">
            Office: <a href="tel:+919607891911">+919607891911</a>
          </p>
          <p className="text-contact">
            Email:{"  "}
            <a href="mailto:contact@prengineerrs.com">
              contact@prengineerrs.com
            </a>
          </p>
        </article>
      </div>
      <div className="contact-right">
        <img src={require("../../images/map.png")} alt="..." />
      </div>
    </div>
  );
}
