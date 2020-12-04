import axios from "axios";
import { BackendTypes } from "./types";
export async function getWorkHistory(): Promise<BackendTypes.WorkHistory> {
  const res = await axios.get<BackendTypes.WorkHistory>("/api/workHistory");
  return res.data;
}
