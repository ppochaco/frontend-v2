/* eslint-disable */

/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import { AxiosInstance } from 'axios'

import { LoginRequestDto, SignIn1Data } from './data-contracts'
import {
  ApiConfig,
  ContentType,
  HttpClient,
  RequestParams,
} from './http-client'

export class Login<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  private axiosInstance: AxiosInstance

  constructor({
    axiosInstance,
    ...config
  }: { axiosInstance: AxiosInstance } & ApiConfig<SecurityDataType>) {
    super(config)
    this.axiosInstance = axiosInstance
  }

  /**
   * No description
   *
   * @tags 로그인 관련 API
   * @name SignIn1
   * @summary 로그인 API
   * @request POST:/login
   * @secure
   * @response `200` `SignIn1Data`
   * @response `400` `void`
   * @response `401` `void`
   */
  signIn1 = (data: LoginRequestDto, params: RequestParams = {}) =>
    this.request<SignIn1Data, void>({
      path: `/login`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
