import { AxiosInstance } from 'axios'

import { ApiConfig, HttpClient } from '@/lib/http-client'

export class CustomHttpClient<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  private axiosInstance: AxiosInstance | undefined

  constructor({
    axiosInstance,
    ...config
  }: { axiosInstance?: AxiosInstance } & ApiConfig<SecurityDataType>) {
    super(config)
    this.axiosInstance = axiosInstance
  }
}
