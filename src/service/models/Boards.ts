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
import { CustomHttpClient } from '../config'
import {
  DeletePostData,
  GetActivityPosts1Data,
  PostWithBoardRequestDto,
  RegisterPostWithBoardData,
} from './data-contracts'
import { ContentType, RequestParams } from './http-client'

export class Boards<
  SecurityDataType = unknown,
> extends CustomHttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 게시글 API
   * @name GetActivityPosts1
   * @summary 활동 게시글 목록 조회
   * @request GET:/boards/{boardId}/posts
   * @secure
   * @response `200` `GetActivityPosts1Data` OK
   * @response `404` `void`
   */
  getActivityPosts1 = (
    boardId: number,
    query?: {
      /**
       * 조회 할 page, default: 0
       * @format int32
       * @default 0
       */
      page?: number
      /**
       * 한 번에 조회 할 page 수, default: 10
       * @format int32
       * @default 10
       */
      size?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<GetActivityPosts1Data, void>({
      path: `/boards/${boardId}/posts`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 게시글 API
   * @name RegisterPostWithBoard
   * @summary 활동 게시글 생성
   * @request POST:/boards/{boardId}/posts
   * @secure
   * @response `200` `RegisterPostWithBoardData` OK
   * @response `201` `void`
   * @response `401` `void`
   * @response `404` `void`
   */
  registerPostWithBoard = (
    boardId: number,
    data: PostWithBoardRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<RegisterPostWithBoardData, void>({
      path: `/boards/${boardId}/posts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })

  /**
   * No description
   *
   * @tags 게시글 API
   * @name DeletePost
   * @summary 활동 게시글 삭제
   * @request DELETE:/boards/{boardId}/posts/{postId}
   * @secure
   * @response `200` `DeletePostData`
   * @response `403` `void`
   * @response `404` `void`
   */
  deletePost = (boardId: number, postId: number, params: RequestParams = {}) =>
    this.request<DeletePostData, void>({
      path: `/boards/${boardId}/posts/${postId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
}
