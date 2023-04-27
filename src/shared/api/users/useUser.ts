import axios from "axios";
import { endpoints } from "../endpoints";
import { useQuery } from "react-query";
import { UserDto } from "./userDto";

export function getUserQueryKey(userId: number) {
  return ["users", String(userId)];
}

async function getUser(id: number) {
  const { data } = await axios.get<UserDto>(endpoints.users.single(id));
  return data;
}

export function useUser(userId = 1) {
  return useQuery({
    queryKey: getUserQueryKey(userId),
    queryFn: () => getUser(userId),
  });
}
