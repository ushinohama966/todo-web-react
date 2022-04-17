import axios from "axios";
import { TODO_URLS } from "../../utils/const";

export const deleteTodo = async (id: string) => {
  const res = await axios.post(TODO_URLS.delete, JSON.stringify({ id }));
  return res.data;
};
