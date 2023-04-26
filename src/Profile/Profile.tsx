import { Stack } from "react-bootstrap";
import { FinancialPlans } from "./FinancialPlans";
import { UserInformation } from "./UserInformation";

export function Profile() {
  return (
    <Stack gap={3}>
      <UserInformation />
      <FinancialPlans />
    </Stack>
  );
}
