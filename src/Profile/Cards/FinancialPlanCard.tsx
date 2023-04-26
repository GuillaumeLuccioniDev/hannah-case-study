import styled from "@emotion/styled";
import * as dayjs from "dayjs";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";
import { BaseFinancialCard } from "./BaseFinancialCard";
import { ComponentProps } from "react";

export function FinancialPlanCard(props: ComponentProps<typeof Card>) {
  return (
    <BaseFinancialCard {...props}>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Created on {dayjs().format("DD/MM/YYYY")}
        </Card.Subtitle>
      </Card.Body>
      <CustomFooter>
        <Badge pill bg="success" className="fs-5 fw-light">
          test
        </Badge>
        <ButtonGroup>
          <Button variant="outline-secondary">Edit</Button>
          <Button variant="outline-secondary">Delete</Button>
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
