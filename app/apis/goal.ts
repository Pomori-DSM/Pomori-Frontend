import { instance } from "./axios";

export const getAllGoals = async () => {
  return await instance.get("/goals");
};

export const getGoals = async (id: any) => {
  return await instance
    .get(`/goals/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

interface GoalsProps {
  goalTitle: string;
  error_id: string;
  endDate: string;
}

export const createGoals = async (data: GoalsProps) => {
  return await instance
    .post(`/goals`, {
      message: data.goalTitle,
      error_id: data.error_id,
      timestamp: data.endDate,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const editGoals = async (id: any, data: any) => {
  return await instance.put(`/goals/${id}`, {
    id: data.id,
    name: data.name,
    deadLine: data.deadLine,
  });
};

export const deleteGoals = async (id: any) => {
  return await instance.delete(`/goals/${id}`);
};
