import styled from "@emotion/styled";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";
import { BaseFinancialCard } from "./BaseFinancialCard";
import { ComponentProps } from "react";
import { FinancialPlanDto, LegalFormDto } from "../../shared/api";
import { css } from "@emotion/react";
import { formatDate } from "../../shared/utils";

export interface FinancialPlanCardProps extends ComponentProps<typeof Card> {
  financialPlan: FinancialPlanDto;
  legalForm: LegalFormDto;
  onEdit: (financialPlan: FinancialPlanDto) => void;
  onDelete: (financialPlan: FinancialPlanDto) => void;
}

export function FinancialPlanCard({ financialPlan, legalForm, onEdit, onDelete, ...props }: FinancialPlanCardProps) {
  return (
    <BaseFinancialCard {...props}>
      <Card.Body>
        <Card.Title>{financialPlan.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Created on {formatDate(financialPlan.createdAt)}</Card.Subtitle>
        {financialPlan.updatedAt && (
          <Card.Subtitle className="mb-2 text-muted">Updated on {formatDate(financialPlan.updatedAt)}</Card.Subtitle>
        )}
      </Card.Body>
      <CustomFooter>
        <Badge
          pill
          className="fs-5 fw-light"
          css={css`
            background-color: ${legalForm.color}!important;
          `}
        >
          {legalForm.name}
        </Badge>
        <ButtonGroup>
          <Button variant="outline-secondary" onClick={() => onEdit(financialPlan)}>
            Edit
          </Button>
          <Button variant="outline-secondary" onClick={() => onDelete(financialPlan)}>
            Delete
          </Button>
        </ButtonGroup>
      </CustomFooter>
    </BaseFinancialCard>
  );
}

const CustomFooter = styled(Card.Footer)`
  background-color: unset;
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-top: unset;
`;
