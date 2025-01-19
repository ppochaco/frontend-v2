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
import { ContentType, RequestParams } from '@/lib/http-client'

import { CustomHttpClient } from '../config'
import {
  CommentRequestDto,
  GetCommentsData,
  RegisterCommentData,
  RemoveCommentData,
  UpdateCommentData,
} from './data-contracts'

export class Posts<
  SecurityDataType = unknown,
> extends CustomHttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 댓글 API
   * @name UpdateComment
   * @summary 댓글 수정
   * @request PUT:/posts/{postId}/comments/{commentId}
   * @secure
   * @response `200` `UpdateCommentData`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   */
  updateComment = (
    postId: number,
    commentId: number,
    data: CommentRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateCommentData, void>({
      path: `/posts/${postId}/comments/${commentId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 댓글 API
   * @name RemoveComment
   * @summary 댓글 삭제
   * @request DELETE:/posts/{postId}/comments/{commentId}
   * @secure
   * @response `200` `RemoveCommentData`
   * @response `401` `void`
   * @response `403` `void`
   * @response `404` `void`
   */
  removeComment = (
    postId: number,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.request<RemoveCommentData, void>({
      path: `/posts/${postId}/comments/${commentId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 댓글 API
   * @name GetComments
   * @summary 댓글 페이징 조회
   * @request GET:/posts/{postId}/comments
   * @secure
   * @response `200` `GetCommentsData` OK
   */
  getComments = (
    postId: number,
    query?: {
      /**
       * @format int32
       * @default 0
       */
      page?: number
      /**
       * @format int32
       * @default 10
       */
      size?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCommentsData, any>({
      path: `/posts/${postId}/comments`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 댓글 API
   * @name RegisterComment
   * @summary 댓글 등록
   * @request POST:/posts/{postId}/comments
   * @secure
   * @response `200` `RegisterCommentData` OK
   * @response `201` `void`
   * @response `401` `void`
   * @response `404` `void`
   */
  registerComment = (
    postId: number,
    data: CommentRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<RegisterCommentData, void>({
      path: `/posts/${postId}/comments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
