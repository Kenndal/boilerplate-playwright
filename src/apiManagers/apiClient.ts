import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import axiosRetry, { isNetworkOrIdempotentRequestError } from "axios-retry"
import config from "config/config"

export class ApiClient {
  private readonly axiosInstance: AxiosInstance
  private bearerToken = ""

  constructor(baseURL: string, timeout = config.timeout) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
      headers: {
        "Content-Type": "application/json",
      },
    })
    const initialDelay = 5000
    axiosRetry(this.axiosInstance, {
      retries: 5,
      retryDelay: (retryCount: number) => {
        return initialDelay * Math.pow(2, retryCount - 1)
      },
      retryCondition: (error: AxiosError) => {
        return error.response?.status === 404 || isNetworkOrIdempotentRequestError(error)
      },
    })
    this.initializeRequestInterceptor()
    this.initializeResponseInterceptor()
  }

  private async getToken(): Promise<string> {
    try {
      this.bearerToken = ""
      // Placeholder for actual token retrieval logic
      return this.bearerToken
    } catch (error) {
      console.error("Failed to retrieve auth token:", error)
      throw error
    }
  }

  private initializeRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        const token = this.bearerToken || (await this.getToken())
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error: AxiosError) => Promise.reject(error),
    )
  }

  private initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(this.handleResponse, this.handleError)
  }

  private handleResponse = (response: AxiosResponse) => {
    return response
  }

  private handleError = (error: AxiosError) => {
    if (error.response) {
      console.error(
        `HTTP error: ${error.response.config.method?.toUpperCase()} ${error.response.config.url}`,
        `[${error.response.status}]`,
        error.response.statusText,
        `\nResponse data: ${JSON.stringify(error.response.data)}`,
      )
    } else if (error.request) {
      console.error(`No response received ${error.config?.method?.toUpperCase()} ${error.config?.url}`)
    } else {
      console.error("Error setting up request", error.message)
    }
    return Promise.reject(error)
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config)
    return response.data
  }

  public async post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config)
    return response.data
  }

  public async put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config)
    return response.data
  }

  public async patch<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.patch<T>(url, data, config)
    return response.data
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config)
    return response.data
  }
}
