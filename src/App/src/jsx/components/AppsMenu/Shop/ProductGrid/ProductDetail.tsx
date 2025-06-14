import { useState, useReducer } from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import avater1 from "../../../../../assets/images/avatar/1.jpg";
import product1 from "../../../../../assets/images/product/1.jpg";
import product2 from "../../../../../assets/images/product/2.jpg";
import product3 from "../../../../../assets/images/product/3.jpg";
import product4 from "../../../../../assets/images/product/4.jpg";
import tab1 from "../../../../../assets/images/tab/1.jpg";
import tab2 from "../../../../../assets/images/tab/2.jpg";
import tab3 from "../../../../../assets/images/tab/3.jpg";
import tab4 from "../../../../../assets/images/tab/4.jpg";

interface State {
  reviewToggle: boolean;
}

interface Action {
  type: string;
}
const initialstate = {
  reviewToggle: false,
};
const reducer = (state: State, action: Action) => {
  if (action.type === "reviewToggle") {
    return { ...state, reviewToggle: !state.reviewToggle };
  }
  return state;
};

const ProductDetail = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [activeTab, setActiveTab] = useState("0");
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [star, setStar] = useState<number>(1);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                  {/* Tab panes */}
                  <Tab.Container defaultActiveKey="first">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <img className="img-fluid" src={product1} alt="" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <img className="img-fluid" src={product2} alt="" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <img className="img-fluid" src={product3} alt="" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="four">
                        <img className="img-fluid" src={product4} alt="" />
                      </Tab.Pane>
                    </Tab.Content>
                    <div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
                      {/* Nav tabs */}
                      <Nav
                        as="ul"
                        className="nav slide-item-list mt-3"
                        role="tablist"
                      >
                        <Nav.Item as="li">
                          <Nav.Link as="a" eventKey="first">
                            <img
                              className="img-fluid"
                              src={tab1}
                              alt=""
                              width={50}
                            />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link as="a" eventKey="second">
                            <img
                              className="img-fluid"
                              src={tab2}
                              alt=""
                              width={50}
                            />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link as="a" eventKey="third">
                            <img
                              className="img-fluid"
                              src={tab3}
                              alt=""
                              width={50}
                            />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link as="a" eventKey="four">
                            <img
                              className="img-fluid"
                              src={tab4}
                              alt=""
                              width={50}
                            />
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </Tab.Container>
                </div>
                {/*Tab slider End*/}

                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                  <div className="product-detail-content">
                    {/*Product details*/}
                    <div className="new-arrival-content pr">
                      <h4>Solid School Kid Uniform</h4>
                      <div className="comment-review star-rating d-flex">
                        <ul>
                          {" "}
                          <li>
                            {" "}
                            <i className="fa fa-star" />
                          </li>{" "}
                          <li>
                            <i className="fa fa-star" />
                          </li>{" "}
                          <li>
                            <i className="fa fa-star" />
                          </li>{" "}
                          <li>
                            <i className="fa fa-star-half-alt" />
                          </li>{" "}
                          <li>
                            <i className="fa fa-star-half-alt" />
                          </li>
                        </ul>
                        <span className="review-text ms-3">
                          (34 reviews) /{" "}
                        </span>
                        <Link
                          onClick={() => dispatch({ type: "reviewToggle" })}
                          className="product-review"
                          to="/ecom-product-detail"
                          data-toggle="modal"
                          data-target="#reviewModal"
                        >
                          Write a review?
                        </Link>
                      </div>
                      <div className="d-table mb-2">
                        <p className="price float-left d-block">$325.00</p>
                      </div>
                      <p>
                        {" "}
                        <span className="item fs-14"> Availability: </span> In
                        stock <i className="fa fa-shopping-basket" />{" "}
                      </p>
                      <p>
                        {" "}
                        <span className="item fs-14">Product code: </span>{" "}
                        0405689{" "}
                      </p>
                      <p>
                        <span className="item fs-14">Brand: </span>Lee
                      </p>
                      <p>
                        <span className="item fs-14">
                          Product tags:&nbsp;&nbsp;
                        </span>
                        <span className="badge badge-warning light me-1">
                          bags
                        </span>
                        <span className="badge badge-success light me-1">
                          clothes
                        </span>
                        <span className="badge badge-info light me-1">
                          shoes
                        </span>
                        <span className="badge badge-danger light me-1">
                          dresses
                        </span>
                      </p>
                      <p className="text-content">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing.
                      </p>
                      <div className="filtaring-area my-3">
                        <div className="size-filter">
                          <h4 className="m-b-15">Select size</h4>
                          <div className="btn-group" data-toggle="buttons">
                            <label
                              className={
                                classnames({ active: activeTab === "1" }) +
                                " btn btn-outline-primary light btn-sm"
                              }
                              onClick={() => {
                                toggle("1");
                              }}
                            >
                              <input
                                type="radio"
                                className="position-absolute invisible"
                                name="options"
                                id="option5"
                              />{" "}
                              XS
                            </label>
                            <label
                              className={
                                classnames({ active: activeTab === "2" }) +
                                " btn btn-outline-primary light btn-sm"
                              }
                              onClick={() => {
                                toggle("2");
                              }}
                            >
                              <input
                                type="radio"
                                className="position-absolute invisible"
                                name="options"
                                id="option1"
                                defaultChecked
                              />
                              SM
                            </label>
                            <label
                              className={
                                classnames({ active: activeTab === "3" }) +
                                " btn btn-outline-primary light btn-sm"
                              }
                              onClick={() => {
                                toggle("3");
                              }}
                            >
                              <input
                                type="radio"
                                className="position-absolute invisible"
                                name="options"
                                id="option2"
                              />{" "}
                              MD
                            </label>
                            <label
                              className={
                                classnames({ active: activeTab === "4" }) +
                                " btn btn-outline-primary light btn-sm"
                              }
                              onClick={() => {
                                toggle("4");
                              }}
                            >
                              <input
                                type="radio"
                                className="position-absolute invisible"
                                name="options"
                                id="option3"
                              />{" "}
                              LG
                            </label>
                            <label
                              className={
                                classnames({ active: activeTab === "5" }) +
                                " btn btn-outline-primary light btn-sm"
                              }
                              onClick={() => {
                                toggle("5");
                              }}
                            >
                              <input
                                type="radio"
                                className="position-absolute invisible"
                                name="options"
                                id="option4"
                              />{" "}
                              XL
                            </label>
                          </div>
                        </div>
                      </div>
                      {/*Quantity start*/}
                      <div className="col-2 px-0">
                        <input
                          type="number"
                          name="num"
                          className="form-control input-btn input-number"
                          defaultValue={1}
                        />
                      </div>
                      {/*Quanatity End*/}
                      <div className="shopping-cart mt-3">
                        <Link
                          className="btn btn-primary btn-lg"
                          to="/ecom-product-detail"
                        >
                          <i className="fa fa-shopping-basket me-2" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review */}
        <Modal
          show={state.reviewToggle}
          onHide={() => dispatch({ type: "reviewToggle" })}
          className="modal fade"
          id="reviewModal"
        >
          <>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Review</h5>
                <button
                  type="button"
                  onClick={() => dispatch({ type: "reviewToggle" })}
                  className="btn-close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({ type: "reviewToggle" });
                  }}
                >
                  <div className="text-center mb-4">
                    <img
                      className="img-fluid rounded"
                      width={78}
                      src={avater1}
                      alt="DexignZone"
                    />
                  </div>
                  <div className="form-group">
                    <div className="rating-widget mb-4 text-center">
                      {/* Rating Stars Box */}
                      <div className="rating-stars">
                        <ul
                          id="stars"
                          className="d-flex justify-content-center align-items-center"
                        >
                          {[1, 2, 3, 4, 5].map((numb, i) => (
                            <li
                              className={`star me-1 ${
                                numb <= star && "selected"
                              }`}
                              key={i}
                              onClick={() => {
                                alert(`Thanks! You rated this ${numb} stars.`);
                                setStar(numb);
                              }}
                            >
                              <i className="fa fa-star me-1" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Comment"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-success btn-block">RATE</button>
                </form>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
};

export default ProductDetail;
