import { Fragment, useState } from "react";
import { Link } from "react-scroll";
import Highlight from "react-highlight";
//import PageTitle from "../../layouts/PageTitle";
import {
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Tab,
  Nav,
} from "react-bootstrap";

interface sidebarLinkType {
  title: string;
  to: string;
}
const sidebarLink: sidebarLinkType[] = [
  { title: "Button Group", to: "button-group" },
  { title: "Button Toolbar", to: "button-toolbar" },
  { title: "Button Sizing", to: "button-sizing" },
  { title: "Button Nesting", to: "button-nesting" },
  { title: "Vertical Variation", to: "vertical-variation" },
  { title: "Vertical Dropdown Variation", to: "vertical-dropdown" },
];
const UiButtonGroup = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  return (
    <Fragment>
      <div className="row ">
        <div className="col-xl-12">
          <div className="page-titles">
            <div className="d-flex align-items-center">
              <h2 className="heading">Button Group</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="element-area">
        <div className="demo-view">
          <div className="container-fluid pt-0 ps-0 pe-lg-4 pe-0 ">
            <Row>
              <Col xl="12">
                <Tab.Container defaultActiveKey="Preview">
                  <Card className="dz-card" id="button-group">
                    <Card.Header className="d-flex justify-content-between flex-wrap">
                      <div>
                        <Card.Title>Button group</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                          Default Button group style
                        </Card.Text>
                      </div>
                      <Nav
                        as="ul"
                        className="nav nav-tabs dzm-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            as="button"
                            type="button"
                            eventKey="Preview"
                          >
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
                        <Card.Body>
                          <ButtonGroup>
                            <Button variant="primary">Left</Button>
                            <Button variant="primary">Middle</Button>
                            <Button variant="primary">Right</Button>
                          </ButtonGroup>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Code">
                        <div className="card-body pt-0 p-0 code-area">
                          <pre className="mb-0">
                            <code className="language-html">
                              <Highlight>
                                {`
<ButtonGroup>
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
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
              <Col xl="12">
                <Tab.Container defaultActiveKey="Preview">
                  <Card className="dz-card" id="button-toolbar">
                    <Card.Header className="d-flex justify-content-between flex-wrap">
                      <div>
                        <Card.Title>Button toolbar</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                          Default Button toolbar style
                        </Card.Text>
                      </div>
                      <Nav
                        as="ul"
                        className="nav nav-tabs dzm-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            as="button"
                            type="button"
                            eventKey="Preview"
                          >
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
                        <Card.Body>
                          <ButtonGroup className="me-2 mb-2">
                            <Button variant="primary">1</Button>
                            <Button variant="primary">2</Button>
                            <Button variant="primary">3</Button>
                            <Button variant="primary">4</Button>
                          </ButtonGroup>
                          <div className="btn-group me-2 mb-2">
                            <Button variant="primary">5</Button>
                            <Button variant="primary">6</Button>
                            <Button variant="primary">7</Button>
                          </div>
                          <div className="btn-group mb-2">
                            <Button variant="primary">8</Button>
                          </div>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Code">
                        <div className="card-body pt-0 p-0 code-area">
                          <pre className="mb-0">
                            <code className="language-html">
                              <Highlight>
                                {`
<ButtonGroup className="me-2 mb-2">
  <Button variant="primary">1</Button>
  <Button variant="primary">2</Button>
  <Button variant="primary">3</Button>
  <Button variant="primary">4</Button>
</ButtonGroup>
<div className="btn-group me-2 mb-2">
  <Button variant="primary">5</Button>
  <Button variant="primary">6</Button>
  <Button variant="primary">7</Button>
</div>
<div className="btn-group mb-2">
  <Button variant="primary">8</Button>
</div>
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
              <Col xl="12">
                <Tab.Container defaultActiveKey="Preview">
                  <Card className="dz-card" id="button-sizing">
                    <Card.Header className="d-flex justify-content-between flex-wrap">
                      <div>
                        <Card.Title>Button Sizing</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                          Default button size style
                        </Card.Text>
                      </div>
                      <Nav
                        as="ul"
                        className="nav nav-tabs dzm-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            as="button"
                            type="button"
                            eventKey="Preview"
                          >
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
                        <Card.Body>
                          <ButtonGroup size="lg" className="mb-2 me-2">
                            <Button variant="primary">Left</Button>
                            <Button variant="primary">Middle</Button>
                            <Button variant="primary">Right</Button>
                          </ButtonGroup>
                          <ButtonGroup className="mb-2 me-2">
                            <Button variant="primary">Left</Button>
                            <Button variant="primary">Middle</Button>
                            <Button variant="primary">Right</Button>
                          </ButtonGroup>
                          <ButtonGroup size="sm" className="mb-2 ">
                            <Button variant="primary">Left</Button>
                            <Button variant="primary">Middle</Button>
                            <Button variant="primary">Right</Button>
                          </ButtonGroup>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Code">
                        <div className="card-body pt-0 p-0 code-area">
                          <pre className="mb-0">
                            <code className="language-html">
                              <Highlight>
                                {`
<ButtonGroup size="lg" className="mb-2 me-2">
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
<ButtonGroup className="mb-2 me-2">
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
<ButtonGroup size="sm" className="mb-2 ">
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
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
              <Col xl="12">
                <Tab.Container defaultActiveKey="Preview">
                  <Card className="dz-card" id="button-nesting">
                    <Card.Header className="d-flex justify-content-between flex-wrap">
                      <div>
                        <Card.Title>Button Nesting</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                          Default button nesting style
                        </Card.Text>
                      </div>
                      <Nav
                        as="ul"
                        className="nav nav-tabs dzm-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            as="button"
                            type="button"
                            eventKey="Preview"
                          >
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
                        <Card.Body>
                          <ButtonGroup>
                            <Button variant="primary">1</Button>
                            <Button variant="primary">2</Button>
                            <DropdownButton
                              as={ButtonGroup}
                              title="Dropdown"
                              id="bg-nested-dropdown"
                            >
                              <Dropdown.Item eventKey="1">
                                Dropdown link
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="2">
                                Dropdown link
                              </Dropdown.Item>
                            </DropdownButton>
                          </ButtonGroup>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Code">
                        <div className="card-body pt-0 p-0 code-area">
                          <pre className="mb-0">
                            <code className="language-html">
                              <Highlight>
                                {`
<ButtonGroup>
  <Button variant="primary">1</Button>
  <Button variant="primary">2</Button>
  <DropdownButton
    as={ButtonGroup}
    title="Dropdown"
    id="bg-nested-dropdown"
  >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
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
              <Col lg="12">
                <Tab.Container defaultActiveKey="Preview">
                  <Card className="dz-card" id="vertical-variation">
                    <Card.Header className="d-flex justify-content-between flex-wrap">
                      <div>
                        <Card.Title>Vertical variation</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                          Default button vertical variation style
                        </Card.Text>
                      </div>
                      <Nav
                        as="ul"
                        className="nav nav-tabs dzm-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            as="button"
                            type="button"
                            eventKey="Preview"
                          >
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
                        <Card.Body>
                          <ButtonGroup vertical>
                            <Button variant="primary">Button</Button>
                            <Button variant="primary">Button</Button>
                            <Button variant="primary">Button</Button>
                            <Button variant="primary">Button</Button>
                            <Button variant="primary">Button</Button>
                            <Button variant="primary">Button</Button>
                          </ButtonGroup>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Code">
                        <div className="card-body pt-0 p-0 code-area">
                          <pre className="mb-0">
                            <code className="language-html">
                              <Highlight>
                                {`
<ButtonGroup vertical>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
</ButtonGroup>
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
              <Col lg="12">
                <Tab.Container defaultActiveKey="Preview">
                  <Card className="dz-card" id="vertical-dropdown">
                    <Card.Header className="d-flex justify-content-between flex-wrap">
                      <div>
                        <Card.Title>Vertical dropdown variation</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                          Default button vertical variation style
                        </Card.Text>
                      </div>
                      <Nav
                        as="ul"
                        className="nav nav-tabs dzm-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            as="button"
                            type="button"
                            eventKey="Preview"
                          >
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
                        <Card.Body>
                          <ButtonGroup vertical>
                            <Button variant="primary">Button</Button>
                            <Button variant="primary">Button</Button>
                            <DropdownButton
                              as={ButtonGroup}
                              title="Dropdown"
                              id="bg-vertical-dropdown-3"
                            >
                              <Dropdown.Item eventKey="1">
                                Dropdown link
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="2">
                                Dropdown link
                              </Dropdown.Item>
                            </DropdownButton>
                            <Button variant="primary">Button</Button>
                            <Button variant="primary">Button</Button>
                            <DropdownButton
                              as={ButtonGroup}
                              title="Dropdown"
                              id="bg-vertical-dropdown-3"
                            >
                              <Dropdown.Item eventKey="1">
                                Dropdown link
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="2">
                                Dropdown link
                              </Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton
                              as={ButtonGroup}
                              title="Dropdown"
                              id="bg-vertical-dropdown-3"
                            >
                              <Dropdown.Item eventKey="1">
                                Dropdown link
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="2">
                                Dropdown link
                              </Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton
                              as={ButtonGroup}
                              title="Dropdown"
                              id="bg-vertical-dropdown-3"
                            >
                              <Dropdown.Item eventKey="1">
                                Dropdown link
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="2">
                                Dropdown link
                              </Dropdown.Item>
                            </DropdownButton>
                          </ButtonGroup>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Code">
                        <div className="card-body pt-0 p-0 code-area">
                          <pre className="mb-0">
                            <code className="language-html">
                              <Highlight>
                                {`
<ButtonGroup vertical>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <DropdownButton
    as={ButtonGroup}
    title="Dropdown"
    id="bg-vertical-dropdown-3"
  >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <DropdownButton
    as={ButtonGroup}
    title="Dropdown"
    id="bg-vertical-dropdown-3"
  >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <DropdownButton
    as={ButtonGroup}
    title="Dropdown"
    id="bg-vertical-dropdown-3"
  >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <DropdownButton
    as={ButtonGroup}
    title="Dropdown"
    id="bg-vertical-dropdown-3"
  >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
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
            </Row>
          </div>
        </div>
        <div className="demo-right ">
          <div className="demo-right-inner dlab-scroll " id="right-sidebar">
            <h4 className="title">Examples For Button Group</h4>
            <ul className="navbar-nav" id="menu-bar">
              {sidebarLink.map((item, ind) => (
                <li key={ind}>
                  <Link
                    to={item.to}
                    smooth={true}
                    className={`scroll ${ind === activeLink ? "active" : ""} `}
                    spy={true}
                    activeClass="active"
                    onClick={() => setActiveLink(ind)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UiButtonGroup;
