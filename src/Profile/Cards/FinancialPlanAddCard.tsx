import { css } from "@emotion/react";
import { Card } from "react-bootstrap";
import { BaseFinancialCard } from "./BaseFinancialCard";
import { ComponentProps } from "react";

export function FinancialPlanAddCard(props: ComponentProps<typeof Card>) {
  return (
    <BaseFinancialCard
      css={css`
        border-style: dashed;
      `}
      {...props}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        <i
          className="bi bi-plus-lg"
          css={css`
            font-size: 5rem;
          `}
        />
      </Card.Body>
    </BaseFinancialCard>
  );
}
