const BASE_URL = "http://localhost:3000";

const usersEndpoints = {
  index: `${BASE_URL}/users`,
  single: (id: number) => `${usersEndpoints.index}/${id}`,
};

const financialPlanEndpoints = {
  index: `${BASE_URL}/financialPlans`,
  single: (id: number) => `${financialPlanEndpoints.index}/${id}`,
};

export const endpoints = {
  users: usersEndpoints,
  financialPlans: financialPlanEndpoints,
  legalForms: `${BASE_URL}/legalForms`,
};
