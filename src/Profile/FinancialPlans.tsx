import { Col, Row } from "react-bootstrap";
import { FinancialPlanAddCard } from "./Cards/FinancialPlanAddCard";
import { FinancialPlanCard } from "./Cards/FinancialPlanCard";
import { AddFinancialPlanModal } from "./AddFinancialPlanModal";
import { useState } from "react";

export function FinancialPlans() {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal((show) => !show);

  return (
    <div>
      <h2 className="pb-2 border-bottom">Financial Plans</h2>
      <AddFinancialPlanModal
        show={showModal}
        onClose={toggleShowModal}
        onConfirm={() => {
          toggleShowModal();
        }}
      />
      <Row xs={1} sm={2} md={2} lg={3} xl={4} xxl={5} className="g-4">
        <Col>
          <FinancialPlanAddCard onClick={toggleShowModal} />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
        <Col>
          <FinancialPlanCard />
        </Col>
      </Row>
    </div>
  );
}
