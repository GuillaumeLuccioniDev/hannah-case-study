import { Col, Row } from "react-bootstrap";
import { FinancialPlanAddCard } from "./Cards/FinancialPlanAddCard";
import { FinancialPlanCard } from "./Cards/FinancialPlanCard";
import { FinancialPlanForm } from "./FinancialPlanForm";
import { useMemo, useState } from "react";
import {
  useLegalForms,
  useFinancialPlans,
  LegalFormDto,
  useCreateFinancialPlan,
  useDeleteFinancialPlan,
  useUpdateFinancialPlan,
  FinancialPlanDto,
} from "../shared/api";

export function FinancialPlans() {
  const [showModal, setShowModal] = useState(false);
  const [financialPlan, setFinancialPlan] = useState<FinancialPlanDto>();

  const toggleShowModal = () => setShowModal((show) => !show);
  const { data: financialPlans } = useFinancialPlans();
  const { data: legalForms } = useLegalForms();
  const { mutate: createFinancialPlan } = useCreateFinancialPlan();
  const { mutate: deleteFinancialPlan } = useDeleteFinancialPlan();
  const { mutate: updatedFinancialPlan } = useUpdateFinancialPlan();

  const legalFormsById = useMemo(
    () =>
      (legalForms ?? []).reduce(
        (acc, legalForm) => ({ ...acc, [legalForm.id]: legalForm }),
        {} as Record<number, LegalFormDto>
      ),
    [legalForms]
  );

  return (
    <div>
      <h2 className="pb-2 border-bottom">Financial Plans</h2>
      {showModal && (
        <FinancialPlanForm
          financialPlan={financialPlan}
          onClose={() => {
            toggleShowModal();
            setFinancialPlan(undefined);
          }}
          onConfirm={(data) => {
            toggleShowModal();
            const now = new Date().toISOString();

            if (financialPlan) {
              updatedFinancialPlan({
                id: financialPlan.id,
                name: data.name,
                legalFormId: +data.legalFormId,
                updatedAt: now,
              });
            } else {
              createFinancialPlan({
                name: data.name,
                legalFormId: +data.legalFormId,
                createdAt: now,
              });
            }

            setFinancialPlan(undefined);
          }}
        />
      )}
      <Row xs={1} sm={2} md={2} lg={3} xl={4} xxl={5} className="g-4">
        <Col>
          <FinancialPlanAddCard onClick={toggleShowModal} />
        </Col>
        {legalForms &&
          financialPlans?.map((financialPlan) => (
            <Col key={financialPlan.id}>
              <FinancialPlanCard
                financialPlan={financialPlan}
                legalForm={legalFormsById[financialPlan.legalFormId]}
                onEdit={(financialPlan) => {
                  setFinancialPlan(financialPlan);
                  toggleShowModal();
                }}
                onDelete={(financialPlan) => deleteFinancialPlan(financialPlan.id)}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}
