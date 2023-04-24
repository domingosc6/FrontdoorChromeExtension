import http from "../http-common";
import ISummaryData from "../types/Summary";

const getAll = () => {
  return http.get<Array<ISummaryData>>("/summary/all");
};
  
const create = (prompt: string) => {
  const promptJson = {prompt: prompt}
  return http.post<ISummaryData>("/summary/request", promptJson);
};

const get = (id: any) => {
  return http.get<ISummaryData>(`/tutorials/${id}`);
};

const update = (id: any, data: ISummaryData) => {
  return http.put<any>(`/tutorials/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/tutorials`);
};

const APIService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default APIService;