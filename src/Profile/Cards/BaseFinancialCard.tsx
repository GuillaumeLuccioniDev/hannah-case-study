import { css } from "@emotion/react";
import { ComponentProps } from "react";
import { Card } from "react-bootstrap";

export function BaseFinancialCard(props: ComponentProps<typeof Card>) {
  return (
    <Card
      css={css`
        height: 150px;
        cursor: pointer;

        &:hover {
          filter: brightness(95%);
        }

        &:focus {
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
          outline: 0;
        }
      `}
      tabindex="0" // allow element to have focus
      {...props}
    />
  );
}
