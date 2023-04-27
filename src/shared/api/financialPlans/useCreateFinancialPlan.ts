import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { financialPlansQueryKey } from ".";
import { endpoints } from "../endpoints";

export interface CreateFinancialPlanRequest {
  legalFormId: number;
  name: string;
  createdAt: string;
}

async function createFinancialPlan(request: CreateFinancialPlanRequest) {
  const { data } = await axios.post<void>(endpoints.financialPlans.index, request);
  return data;
}

export function useCreateFinancialPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFinancialPlan,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: financialPlansQueryKey });
    },
  });
}
