import { Description } from "../shared/components";
import { Stack } from "react-bootstrap";
import { UserDto } from "../shared/api";
import { formatDate } from "../shared/utils";

export interface UserInformationProps {
  user: UserDto;
}

export function UserInformation({ user }: UserInformationProps) {
  return (
    <div>
      <h2 className="pb-2 border-bottom">Account details</h2>
      <Stack gap={1}>
        <Description title="Name">{`${user.firstName} ${user.lastName}`}</Description>
        <Description title="E-mail">{user.email}</Description>
        <Description title="Account creation date">{formatDate(user.createdAt)}</Description>
      </Stack>
    </div>
  );
}
