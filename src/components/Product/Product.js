import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { ProductData } from "../data";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="product" id="product">
        <div>
          <h1 className="heading">
            <span className="heading_text">P</span>roducts
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </h1>
        </div>
        <div className="container-card">
          {ProductData.map((data) => {
            return (
              <div className="card" key={data.id}>
                <div className="card_svg"></div>
                <div className="card_content">
                  <div className="card_content_1">
                    <img src={data.image} alt="..." />
                  </div>
                  <div className="card_content_2">
                    <h3 className="imgCaption">{data.title}</h3>
                  </div>
                  <div className="card_content_3">
                    <Link to={`/products/${data.id}`}>Read More</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
