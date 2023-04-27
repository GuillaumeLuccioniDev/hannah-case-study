import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { financialPlansQueryKey } from ".";
import { endpoints } from "../endpoints";

export interface UpdateFinancialPlanRequest {
  id: number;
  legalFormId: number;
  name: string;
  updatedAt: string;
}

async function updateFinancialPlan({ id, ...request }: UpdateFinancialPlanRequest) {
  const { data } = await axios.patch<void>(endpoints.financialPlans.single(id), request);
  return data;
}

export function useUpdateFinancialPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFinancialPlan,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: financialPlansQueryKey });
    },
  });
}
