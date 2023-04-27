import { Stack } from "react-bootstrap";
import { FinancialPlans } from "./FinancialPlans";
import { UserInformation } from "./UserInformation";
import { useUser } from "../shared/api";

export function Profile() {
  const { data: user } = useUser();

  return (
    <Stack gap={5}>
      {user && <UserInformation user={user} />}
      <FinancialPlans />
    </Stack>
  );
}
