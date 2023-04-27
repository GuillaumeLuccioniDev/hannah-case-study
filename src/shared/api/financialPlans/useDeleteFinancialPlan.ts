import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { financialPlansQueryKey } from ".";
import { endpoints } from "../endpoints";

async function deleteFinancialPlan(id: number) {
  const { data } = await axios.delete<void>(endpoints.financialPlans.single(id));
  return data;
}

export function useDeleteFinancialPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFinancialPlan,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: financialPlansQueryKey });
    },
  });
}
