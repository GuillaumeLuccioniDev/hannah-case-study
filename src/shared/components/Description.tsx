import { Row, Col } from "react-bootstrap";

export interface DescriptionProps {
  title: string;
  children: React.ReactNode;
}

export function Description({ title, children }: DescriptionProps) {
  return (
    <Row>
      <Col xs="auto" className="fw-light">
        {title}
      </Col>
      <Col>{children}</Col>
    </Row>
  );
}
