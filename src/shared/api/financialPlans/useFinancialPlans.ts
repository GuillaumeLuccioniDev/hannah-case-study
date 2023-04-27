import axios from "axios";
import { endpoints } from "../endpoints";
import { useQuery } from "react-query";
import { FinancialPlanDto } from ".";

export const financialPlansQueryKey = ["financialPlans"];

async function getFinancialPlans() {
  const { data } = await axios.get<FinancialPlanDto[]>(endpoints.financialPlans.index);
  return data;
}

export function useFinancialPlans() {
  return useQuery({
    queryKey: financialPlansQueryKey,
    queryFn: getFinancialPlans,
  });
}
