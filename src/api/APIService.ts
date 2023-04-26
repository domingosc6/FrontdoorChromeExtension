import http from "../http-common";
import ISummaryData from "../types/SummaryData";
import ISummaryDataList from "../types/SummaryDataList";

const getAll = () => {
  return http.get<ISummaryDataList>("/summary/all");
};
  
const create = (prompt: string) => {
  const promptJson = {prompt: prompt}
  console.log(promptJson);
  return http.post<ISummaryData>("/summary/request", promptJson);
};

const get = (id: any) => {
  return http.get<ISummaryData>(`/summary/${id}`);
};

const update = (id: any, data: ISummaryData) => {
  return http.put<any>(`/summary/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/summary/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/summary`);
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