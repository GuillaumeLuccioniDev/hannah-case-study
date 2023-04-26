import * as dayjs from "dayjs";
import { Description } from "../shared/components";
import { Stack } from "react-bootstrap";

export function UserInformation() {
  return (
    <div>
      <h2 className="pb-2 border-bottom">Account details</h2>
      <Stack gap={1}>
        <Description title="Name">John Doe</Description>
        <Description title="E-mail">john.doe@example.com</Description>
        <Description title="Account creation date">{dayjs().format("DD/MM/YYYY")}</Description>
      </Stack>
    </div>
  );
}
