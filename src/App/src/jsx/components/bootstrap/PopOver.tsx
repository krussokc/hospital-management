import React from "react";
import {
  Row,
  Col,
  Card,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";

const UiPopOver: React.FC = () => {
  return (
    <div className="h-80">
      <div className="row">
        <div className="col-xl-12">
          <div className="page-titles">
            <div className="d-flex align-items-center">
              <h2 className="heading">Popover</h2>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Bootstrap popover</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laborum dolorum culpa a maiores officia ab. Cumque
                necessitatibus voluptates soluta, ullam numquam nulla. Et a
                architecto veritatis sint, autem cupiditate iure illo pariatur
                eum, praesentium numquam ea quaerat ipsam? Corrupti nobis illo
                itaque quae, qui numquam vero ipsa, reiciendis sit repudiandae
                molestiae natus vel voluptatibus exercitationem ducimus neque
                harum ad, commodi excepturi repellat eos fugiat minus eius.
                Doloremque itaque repudiandae saepe quia temporibus? Vitae,
                reprehenderit aliquam facilis qui at quis provident in maiores
                illo laborum, voluptatem recusandae cupiditate nemo. Nulla iusto
                ad consequatur reprehenderit quod accusamus, vitae, blanditiis
                quae ut tenetur nobis animi dolorum consectetur dignissimos amet
                illo provident nam obcaecati eligendi molestias tempora? Ad nam
                nobis eaque consequatur tempore tenetur eius ipsum reprehenderit
                dignissimos inventore. Id recusandae nemo dicta rerum.
                Distinctio itaque, veniam dolore inventore aliquid assumenda
                neque. Deserunt!
              </Card.Text>
              <div className="bootstrap-popover-wrapper">
                <div className="bootstrap-popover d-inline-block">
                  {["Left", "Top", "Bottom", "Right"].map(
                    (placement: string, i: number) => (
                      <OverlayTrigger
                        trigger="click"
                        key={i}
                        placement={
                          placement.toLowerCase() as
                            | "top"
                            | "bottom"
                            | "left"
                            | "right"
                        }
                        overlay={
                          <Tooltip
                            className="toltip-popover popover-inner"
                            id={`popover-positioned-${placement.toLowerCase()}`}
                          >
                            <h3 className="popover-header">{`Popover on ${placement}`}</h3>
                            <div className="popover-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</div>
                          </Tooltip>
                        }
                      >
                        <Button
                          variant="primary"
                          size="sm"
                          className="me-2 mt-3 px-4"
                        >
                          {placement}
                        </Button>
                      </OverlayTrigger>
                    )
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UiPopOver;
