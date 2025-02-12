import axios, { AxiosInstance } from "axios";

export class BaseApiService {
  protected readonly api: AxiosInstance;

  constructor(baseURL: string, userId?: number) {
    this.api = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "user-id": userId ?? "",
      },
    });

    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              // Handle unauthorized
              break;
            case 404:
              // Handle not found
              break;
            default:
              // Handle other errors
              break;
          }
        }
        return Promise.reject(error);
      },
    );
  }

  protected handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message;
      throw new Error(`API Error: ${message}`);
    }
    throw error;
  }
}
