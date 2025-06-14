import { useState, ReactNode } from "react";
import { Fragment } from "react";
import Highlight from "react-highlight";
import { Link as ScrollLink } from "react-scroll";
import { Row, Card, Nav, Tab, Col, Pagination } from "react-bootstrap";

interface SidebarLink {
  to: string;
  title: string;
}

const sidebarLink: SidebarLink[] = [
  { to: "default-pagination", title: "Default Pagination" },
  { to: "pagination-gutter", title: "Pagination Gutter" },
  { to: "pagination-color", title: "Pagination Color" },
  { to: "pagination-circle", title: "Pagination Circle" },
];

const UiPagination: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const active = 1;
  const items: ReactNode[] = [];

  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const pag = (
    size:  "sm" | "lg" |  undefined,
    gutter: boolean = false,
    variant: string = "",
    bg: boolean = true,
    circle: boolean = false
  ) => (
    <Pagination
      size={size}
      className={`  ${gutter ? "pagination-gutter" : ""} ${
        variant && `pagination-${variant}`
      } ${!bg && "no-bg"} ${circle && "pagination-circle"}`}
    >
      <li className="page-item page-indicator">
        <ScrollLink className="page-link" to="#">
          <i className="la la-angle-left" />
        </ScrollLink>
      </li>
      {items}
      <li className="page-item page-indicator">
        <ScrollLink className="page-link" to="#">
          <i className="la la-angle-right" />
        </ScrollLink>
      </li>
    </Pagination>
  );

  return (
    <Fragment>
      <div className="row ">
        <div className="col-xl-12">
          <div className="page-titles">
            <div className="d-flex align-items-center">
              <h2 className="heading">Pagination</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="element-area">
        <div className="demo-view">
          <div className="container-fluid pt-0 ps-0 pe-lg-4 pe-0">
            <Row>
              <Col xl={12}>
                <Tab.Container defaultActiveKey="Preview">
                  <Card className="dz-card" id="default-pagination">
                    <Card.Header className="flex-wrap">
                      <div>
                        <Card.Title>Pagination</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                          Default pagination style
                        </Card.Text>
                      </div>
                      <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" >
                        <Nav.Item as="li" className="nav-item">
                          <Nav.Link as="button" type="button" eventKey="Preview">
                            Preview
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="nav-item">
                          <Nav.Link as="button" type="button" eventKey="Code">
                            React
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Card.Header>
                    <Tab.Content>
                      <Tab.Pane eventKey="Preview">
                        <Card.Body className="pt-0">
                          <Nav>{pag(undefined, false, "", true, false)}</Nav>
                          <Nav>{pag("lg", false, "", true, false)}</Nav>
                          <Nav>{pag("sm", false, "", true, false)}</Nav>
                          
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Code">
                        <div className="card-body pt-0 p-0 code-area">
                          <pre className="mb-0">
                            <code className="language-html">
                              <Highlight>
                                {`
<Nav>{pag("", false, "", true, false)}</Nav>
<Nav>{pag("sm", false, "", true, false)}</Nav>
<Nav>{pag("lg", false, "", true, false)}</Nav>
`}
                              </Highlight>
                            </code>
                          </pre>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Card>
                </Tab.Container>
              </Col>
              <Col xl={12}>
                    <Tab.Container defaultActiveKey="Preview">
                      <Card id="pagination-gutter" className="dz-card">
                        <Card.Header className="flex-wrap">
                          <div>
                            <Card.Title>Pagination Gutter</Card.Title>
                            <Card.Text className="mb-0 subtitle">
                              add <code>.pagination-gutter</code> to change the style
                            </Card.Text>
                          </div>
                          <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                            <Nav.Item as="li" className="nav-item" role="presentation">
                              <Nav.Link as="button"  type="button" eventKey="Preview">Preview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item" >
                              <Nav.Link as="button"  type="button" eventKey="Code">React</Nav.Link>
                            </Nav.Item>
                        </Nav>  
                        </Card.Header>
                        <Tab.Content>
                          <Tab.Pane eventKey="Preview">
                            <Card.Body className="pt-0">
                              <Nav>{pag(undefined, true, "", true, false)}</Nav>
                              <Nav>{pag("sm", true, "", true, false)}</Nav>
                              <Nav>{pag("lg", true, "", true, false)}</Nav>
                            </Card.Body>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
<pre className="mb-0"><code className="language-html">
<Highlight>
{`
<Nav>{pag("", true, "", true, false)}</Nav>
<Nav>{pag("sm", true, "", true, false)}</Nav>
<Nav>{pag("xs", true, "", true, false)}</Nav>
`}
</Highlight>
</code></pre>
</div>
                          </Tab.Pane>
                        </Tab.Content>    
                      </Card>
                    </Tab.Container>  
                  </Col>
                  <Col xl={12}>
                    <Tab.Container defaultActiveKey="Preview">
                      <Card id="pagination-color" className="dz-card">
                        <Card.Header className="flex-wrap">
                          <div>
                            <Card.Title>Pagination Color</Card.Title>
                            <Card.Text className="mb-0 subtitle">
                              add <code>.pagination-gutter</code> to change the style
                            </Card.Text>
                          </div>
                          <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                            <Nav.Item as="li" className="nav-item" role="presentation">
                              <Nav.Link as="button"  type="button" eventKey="Preview">Preview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item" >
                              <Nav.Link as="button"  type="button" eventKey="Code">React</Nav.Link>
                            </Nav.Item>
                        </Nav>  
                        </Card.Header>
                        <Tab.Content>
                          <Tab.Pane eventKey="Preview">
                            <Card.Body className="pt-0">
                              <Nav>{pag(undefined, true, "primary", false, false)}</Nav>
                              <Nav>{pag(undefined, true, "danger", true, false)}</Nav>
                              <Nav>{pag("sm", true, "info", true, false)}</Nav>
                              <Nav>{pag("lg", true, "warning", true, false)}</Nav>
                            </Card.Body>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
<pre className="mb-0"><code className="language-html">
<Highlight>
{`
<Nav>{pag("", true, "primary", false, false)}</Nav>
<Nav>{pag("", true, "danger", true, false)}</Nav>
<Nav>{pag("sm", true, "info", true, false)}</Nav>
<Nav>{pag("xs", true, "warning", true, false)}</Nav>
`}
</Highlight>
</code></pre>
</div>
                          </Tab.Pane>
                        </Tab.Content>    
                      </Card>
                    </Tab.Container>  
                  </Col>
                  <Col xl={12}>
                    <Tab.Container defaultActiveKey="Preview">
                      <Card id="pagination-circle" className="dz-card">
                        <Card.Header className="flex-wrap">
                          <div>
                            <Card.Title>Pagination Circle</Card.Title>
                            <Card.Text className="mb-0 subtitle">
                              add <code>.pagination-circle</code> to change the style
                            </Card.Text>
                          </div>
                          <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                            <Nav.Item as="li" className="nav-item" role="presentation">
                              <Nav.Link as="button"  type="button" eventKey="Preview">Preview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item" >
                              <Nav.Link as="button"  type="button" eventKey="Code">React</Nav.Link>
                            </Nav.Item>
                        </Nav>  
                        </Card.Header>
                        <Tab.Content>
                          <Tab.Pane eventKey="Preview">
                            <Card.Body className="pt-0">
                              <Nav>{pag(undefined, true, "", true, true)}</Nav>
                              <Nav>{pag("sm", true, "", true, true)}</Nav>
                              <Nav>{pag("lg", true, "", true, true)}</Nav>
                            </Card.Body>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
<pre className="mb-0"><code className="language-html">
<Highlight>
{`
<Nav>{pag("", true, "", true, true)}</Nav>
<Nav>{pag("sm", true, "", true, true)}</Nav>
<Nav>{pag("xs", true, "", true, true)}</Nav>
`}
</Highlight>
</code></pre>
</div>
                          </Tab.Pane>
                        </Tab.Content>    
                      </Card>
                    </Tab.Container>  
                  </Col>
            </Row>
          </div>
        </div>
        <div className="demo-right ">
          <div className="demo-right-inner dlab-scroll " id="right-sidebar">
            <h4 className="title">Examples For Pagination</h4>
            <ul className="navbar-nav" id="menu-bar">
              {sidebarLink.map((item, ind) => (
                <li key={ind}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    className={`scroll ${ind === activeLink ? "active" : ""}`}
                    activeClass="active"
                    spy={true}
                    onClick={() => setActiveLink(ind)}
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UiPagination;
