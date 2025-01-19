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
import { CommentRequestDto, RegisterReplyData } from './data-contracts'

export class Comments<
  SecurityDataType = unknown,
> extends CustomHttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 댓글 API
   * @name RegisterReply
   * @summary 답글 등록
   * @request POST:/comments/{commentId}/replies
   * @secure
   * @response `200` `RegisterReplyData` OK
   * @response `201` `void`
   * @response `400` `void`
   * @response `401` `void`
   * @response `404` `void`
   */
  registerReply = (
    commentId: number,
    data: CommentRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<RegisterReplyData, void>({
      path: `/comments/${commentId}/replies`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
