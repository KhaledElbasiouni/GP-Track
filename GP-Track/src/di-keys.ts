import type { InjectionKey } from "vue";
import type { AxiosStatic } from "axios";

export const DI_KEYS = {
  HttpClient: Symbol("HttpClient") as InjectionKey<HttpClient>,
} as const;
