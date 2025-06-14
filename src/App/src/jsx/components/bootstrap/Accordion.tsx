import { Fragment, useState } from "react";
// import { Link } from 'react-router-dom';

import { Link, Element  } from "react-scroll";
import Highlight from "react-highlight";
import { Row, Col, Card, Accordion, Tab, Nav } from "react-bootstrap";

interface accordionType {
  title: string;
  text: string;
  bg: string;
}

interface sidebarDataType {
  title: string;
  to: string;
  select: string;
}
const defaultAccordion: accordionType[] = [
  {
    title: "Accordion Header One",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "primary",
  },
  {
    title: "Accordion Header Two",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

    bg: "info",
  },
  {
    title: "Accordion Header Three",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success",
  },
];
const sidebarData: sidebarDataType[] = [
  { title: "Default Accordion", to: "accordion-one", select: "" },
  { title: "Accordion Bordered", to: "accordion-two", select: "" },
  { title: "Accordion without space", to: "accordion-three", select: "" },
  {
    title: "Accordion without space with border",
    to: "accordion-four",
    select: "",
  },
  {
    title: "Accordion indicator in left position",
    to: "accordion-five",
    select: "",
  },
  { title: "Accordion with icon", to: "accordion-six", select: "" },
  { title: "Accordion header background", to: "accordion-seven", select: "" },
  { title: "Accordion solid background", to: "accordion-eight", select: "" },
  { title: "Accordion active background", to: "accordion-nine", select: "" },
  { title: "Accordion header shadow", to: "accordion-ten", select: "" },
  { title: "Accordion Rounded Stylish", to: "accordion-eleven", select: "" },
  { title: "Accordion Gradient", to: "accordion-twelve", select: "" },
];
const UiAccordion = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  return (
    <Fragment>
      <div className="row ">
        <div className="col-xl-12">
          <div className="page-titles">
            <div className="d-flex align-items-center">
              <h2 className="heading">Accordion</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="element-area">
        <div className="demo-view">
          <div className="container-fluid pt-0 ps-0 pe-lg-4 pe-0">
            <Row>
              <Col xl="12">
                <Element name="accordion-one">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title>Default Accordion</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Default accordion. Add <code>accordion</code> class in
                            root
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-primary"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item
                                  className="accordion-item"
                                  key={i}
                                  eventKey={`${i}`}
                                >
                                  <Accordion.Header className="accordion-header rounded-lg">
                                    {d.title}
                                  </Accordion.Header>
                                  <Accordion.Collapse eventKey={`${i}`}>
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-primary" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
      <Accordion.Item className="accordion-item" key={i} eventKey={\`$/{i}\`}>
        <Accordion.Header className="accordion-header rounded-lg">
          {d.title}
        </Accordion.Header>
        <Accordion.Collapse eventKey={\`$\{i}\`}>
          <div className="accordion-body">{d.text}</div>
        </Accordion.Collapse>
      </Accordion.Item>
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element> 
              </Col>
              <Col xl="12">
                <Element name="accordion-two">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion bordered</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Accordion with border. Add class{" "}
                            <code>accordion-bordered</code> with the class{" "}
                            <code> accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-danger-solid"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((data, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header className="accordion-header">
                                    {" "}
                                    {data.title}
                                  </Accordion.Header>
                                  <Accordion.Collapse
                                    eventKey={`${i}`}
                                    className="accordion__body"
                                  >
                                    <div className="accordion-body">
                                      {data.text}
                                    </div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
  {defaultAccordion.map((data, i) => (
    <Accordion.Item  key={i} eventKey={\`$\{i}\`}>
      <Accordion.Header className="accordion-header">
        {" "}
          {data.title}                      
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`} className="accordion__body">
        <div className="accordion-body">{data.text}</div>
      </Accordion.Collapse>
    </Accordion.Item >
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Element>
              </Col>
              <Col xl="12">
                <Element name="accordion-three">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion Without Space</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-no-gutter</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-no-gutter accordion-header-bg"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header className="accordion-header">
                                    {d.title}
                                  </Accordion.Header>
                                  <Accordion.Collapse eventKey={`${i}`}>
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-no-gutter accordion-header-bg" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item  key={i} eventKey={\`$\{i}\`}>
      <Accordion.Header  className="accordion-header">
          {d.title}                     
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`}>
          <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>		
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Element>
              </Col>

              <Col xl="12">
                <Element name="accordion-four">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>
                            Accordion Without Space With Border
                          </Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add{" "}
                            <code>accordion-no-gutter accordion-bordered</code>{" "}
                            class with <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-no-gutter "
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header as="div">
                                    {d.title}
                                  </Accordion.Header>
                                  <Accordion.Collapse eventKey={`${i}`}>
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-no-gutter " defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item  key={i}  eventKey={\`$\{i}\`}>
      <Accordion.Header as='div'>
          {d.title}
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`}>
          <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item >
  ))}
  </Accordion>	
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Element>
              </Col>

              <Col xl="12">
                <Element name="accordion-five">                
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>
                            Accordion Indicator In Left Position
                          </Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-left-indicator</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-left-indicator"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header className="accordion-header">
                                    {d.title}
                                  </Accordion.Header>
                                  <Accordion.Collapse eventKey={`${i}`}>
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-left-indicator" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item key={i} eventKey={\`$\{i}\`}>
      <Accordion.Header  className="accordion-header">
          {d.title}
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`}>
          <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Element>
              </Col>

              <Col xl="12">
                <Element name="accordion-six">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion With Icon</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-with-icon</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-with-icon"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header className="accordion-header">
                                    <span className="accordion-header-icon"></span>
                                    <span className="accordion-header-text">
                                      {d.title}
                                    </span>
                                    <span className="accordion-header-indicator indicator-bordered"></span>
                                  </Accordion.Header>
                                  <Accordion.Collapse eventKey={`${i}`}>
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-with-icon" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item key={i}  eventKey={\`$\{i}\`}>
      <Accordion.Header className="accordion-header">
        <span className="accordion-header-icon"></span>
        <span className="accordion-header-text">{d.title}</span>
        <span className="accordion-header-indicator indicator-bordered"></span>
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`}>
        <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element>
              </Col>
              <Col xl="12">
                <Element name="accordion-seven">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion Header Background</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-header-bg</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-header-bg "
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header
                                    className={`accordion-header accordion-header-${d.bg}`}
                                  >
                                    <span className="accordion-header-text">
                                      {d.title}
                                    </span>
                                  </Accordion.Header>
                                  <Accordion.Collapse eventKey={`${i}`}>
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion
  className="accordion accordion-header-bg "
  defaultActiveKey="0"
  >
  {defaultAccordion.map((d, i) => (
    <Accordion.Item  key={i}  eventKey={\`$\{i}\`}>
      <Accordion.Header  className={\`accordion-header accordion-header-$\{d.bg}\`}>
        
        <span className="accordion-header-text">{d.title}</span>
        
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`} >
        <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element>
              </Col>

              <Col xl="12">
                <Element name="accordion-eight">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion Solid Background</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-solid-bg</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-solid-bg"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header className="accordion-header  accordion-header-primary">
                                    <span className="accordion-header-text">
                                      {d.title}
                                    </span>
                                  </Accordion.Header>
                                  <Accordion.Collapse
                                    eventKey={`${i}`}
                                    className="accordion__body"
                                  >
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-solid-bg" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item  key={i} eventKey={\`$\{i}\`}>
      <Accordion.Header  className="accordion-header  accordion-header-primary">
        <span className="accordion-header-text">{d.title}</span>
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`} className="accordion__body">
        <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item >
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element>
              </Col>
              <Col xl="12">
                <Element name="accordion-nine">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion Active Background</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-active-header</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-active-header"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item
                                  className="accordion-item"
                                  key={i}
                                  eventKey={`${i}`}
                                >
                                  <Accordion.Header className="accordion-header accordion-header-primary">
                                    <span className="accordion-header-text">
                                      {d.title}
                                    </span>
                                  </Accordion.Header>
                                  <Accordion.Collapse
                                    eventKey={`${i}`}
                                    className="accordion__body"
                                  >
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-active-header" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item className="accordion-item" key={i} eventKey={\`$\{i}\`}>
      <Accordion.Header className="accordion-header accordion-header-primary">
      
        <span className="accordion-header-text">{d.title}</span>
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`} className="accordion__body">
        <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element>
              </Col>

              <Col xl="12">
                <Element name="accordion-ten">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion header shadow</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-header-shadow</code> and{" "}
                            <code>accordion-rounded</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-header-shadow accordion-rounded"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item
                                  className="accordion-item"
                                  key={i}
                                  eventKey={`${i}`}
                                >
                                  <Accordion.Header className="accordion-header-primary">
                                    <span className="accordion-header-text">
                                      {d.title}
                                    </span>
                                  </Accordion.Header>
                                  <Accordion.Collapse
                                    eventKey={`${i}`}
                                    className="accordion__body"
                                  >
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-header-shadow accordion-rounded" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item className="accordion-item" key={i} eventKey={\`$\{i}\`}>
      <Accordion.Header  className="accordion-header-primary">
        <span className="accordion-header-text">{d.title}</span>
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`} className="accordion__body">
          <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>	
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element>
              </Col>

              <Col xl="12">
                <Element name="accordion-eleven">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion Rounded Stylish</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-rounded-stylish</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-rounded-stylish accordion-bordered"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header className="rounded-lg">
                                    {d.title}
                                    <span className="accordion-header-indicator "></span>
                                  </Accordion.Header>
                                  <Accordion.Collapse
                                    eventKey={`${i}`}
                                    className="accordion__body"
                                  >
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-rounded-stylish accordion-bordered" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item  key={i}  eventKey={\`$\{i}\`}>
        <Accordion.Header className="rounded-lg">
          {d.title}
          <span className="accordion-header-indicator "></span>					             
        </Accordion.Header>
        <Accordion.Collapse eventKey={\`$\{i}\`} className="accordion__body">
          <div className="accordion-body">{d.text}</div>
        </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element>
              </Col>

              <Col xl="12">
                <Element name="accordion-twelve">
                  <Card className="dz-card">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap">
                        <div>
                          <Card.Title>Accordion Gradient</Card.Title>
                          <Card.Text className="m-0 subtitle">
                            Add <code>accordion-gradient</code> class with{" "}
                            <code>accordion</code>
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
                      <Tab.Content className="tab-content" id="myTabContent">
                        <Tab.Pane eventKey="Preview">
                          <Card.Body className="card-body">
                            <Accordion
                              className="accordion accordion-rounded-stylish accordion-gradient"
                              defaultActiveKey="0"
                            >
                              {defaultAccordion.map((d, i) => (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                  <Accordion.Header className="accordion-header rounded-lg">
                                    <span className="accordion-header-text">
                                      {d.title}
                                    </span>
                                  </Accordion.Header>
                                  <Accordion.Collapse
                                    eventKey={`${i}`}
                                    className="accordion__body"
                                  >
                                    <div className="accordion-body">{d.text}</div>
                                  </Accordion.Collapse>
                                </Accordion.Item>
                              ))}
                            </Accordion>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0">
                              <code className="language-html">
                                <Highlight>
                                  {`
  <Accordion className="accordion accordion-rounded-stylish accordion-gradient" defaultActiveKey="0">
  {defaultAccordion.map((d, i) => (
    <Accordion.Item  key={i} eventKey={\`$\{i}\`}>
      <Accordion.Header  className="accordion-header rounded-lg">                                              
        <span className="accordion-header-text">{d.title}</span>
      </Accordion.Header>
      <Accordion.Collapse eventKey={\`$\{i}\`} className="accordion__body">
          <div className="accordion-body">{d.text}</div>
      </Accordion.Collapse>
    </Accordion.Item>
  ))}
  </Accordion>	
  `}
                                </Highlight>
                              </code>
                            </pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                  </Element>
              </Col>
            </Row>{" "}
          </div>
        </div>
        <div className="demo-right ">
          <div className="dlab-scroll demo-right-inner  navigation navbar">
            <h4 className="title">Accordion</h4>
            <ul className="navbar-nav nav" id="menu-bar">
              {sidebarData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    smooth={true}
                    className={`scroll ${
                      index === activeLink ? "active" : ""
                    } `}
                    activeClass="active"
                    spy={true}
                    onClick={() => setActiveLink(index)}
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

export default UiAccordion;
