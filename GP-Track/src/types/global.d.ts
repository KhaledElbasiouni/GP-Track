import type { AxiosStatic } from "axios";

declare global {
  type HttpClient = AxiosStatic;
}
