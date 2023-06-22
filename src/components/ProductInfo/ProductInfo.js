// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ProductInfo.css";
import { ProductData } from "../data";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function ProductInfo() {
  // const navigate = useNavigate();
  const { id } = useParams();

  // const goBack = () => {
  //   navigate("/products");
  // };

  const thisProduct = ProductData.find((data) => data.id === id);

  return (
    <>
      <div className="productInfo">
        {/* <Navbar /> */}
        <div className="productInfo_content">
          {/* <div className="btn-back">
            <button className="btn-back__text" onClick={goBack()}>
              Back
            </button>
          </div> */}
          <div className="productInfo_header">
            <h4> {thisProduct.title}</h4>
            <img
              className="productInfo__image"
              src={thisProduct.image}
              alt="Product"
            />
          </div>
        </div>
        <div className="productInfo_body">
          <h3>The data will be fetched from Database here</h3>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Get Quotes</th>
                      <th scope="col">Product Code</th>
                      <th scope="col">Cover Size</th>
                      <th scope="col">Max. Permissible Rebar Dia.</th>
                      <th scope="col">Min. Breaking Load</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                        </div>
                      </td>
                      <td>PR50</td>
                      <td>50mm</td>
                      <td>40mm</td>
                      <td>18000N</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck2"
                          />
                        </div>
                      </td>
                      <td>PR50</td>
                      <td>50mm</td>
                      <td>40mm</td>
                      <td>18000N</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck3"
                          />
                        </div>
                      </td>
                      <td>PR50</td>
                      <td>50mm</td>
                      <td>40mm</td>
                      <td>18000N</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                        </div>
                      </td>
                      <td>PR50</td>
                      <td>50mm</td>
                      <td>40mm</td>
                      <td>18000N</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck2"
                          />
                        </div>
                      </td>
                      <td>PR50</td>
                      <td>50mm</td>
                      <td>40mm</td>
                      <td>18000N</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck3"
                          />
                        </div>
                      </td>
                      <td>PR50</td>
                      <td>50mm</td>
                      <td>40mm</td>
                      <td>18000N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default ProductInfo;
