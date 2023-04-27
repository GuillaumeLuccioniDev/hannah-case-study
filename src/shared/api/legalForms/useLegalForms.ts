import axios from "axios";
import { endpoints } from "../endpoints";
import { useQuery } from "react-query";
import { LegalFormDto } from ".";

export const legalFormsQueryKey = ["legalForms"];

async function getLegalForms() {
  const { data } = await axios.get<LegalFormDto[]>(endpoints.legalForms);
  return data;
}

export function useLegalForms() {
  return useQuery({
    queryKey: legalFormsQueryKey,
    queryFn: getLegalForms,
  });
}
