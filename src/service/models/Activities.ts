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
  AddBoardData,
  CreateBoardRequestDto,
  DeleteBoardData,
  GetBoardData,
  GetBoardsData,
  UpdateBoardData,
  UpdateBoardImageData,
  UpdateBoardImagePayload,
  UpdateBoardRequestDto,
} from './data-contracts'
import { ContentType, RequestParams } from './http-client'

export class Activities<
  SecurityDataType = unknown,
> extends CustomHttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 게시판 API
   * @name GetBoards
   * @summary 게시판 페이징 조회
   * @request GET:/activities/{activityId}/boards
   * @secure
   * @response `200` `GetBoardsData` OK
   * @response `404` `void`
   */
  getBoards = (
    activityId: number,
    query?: {
      /**
       * 조회 할 page, default: 0
       * @format int32
       * @default 0
       */
      page?: number
      /**
       * 한 번에 조회 할 page 수, default: 5
       * @format int32
       * @default 5
       */
      size?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<GetBoardsData, void>({
      path: `/activities/${activityId}/boards`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 게시판 API
   * @name AddBoard
   * @summary 게시판 생성
   * @request POST:/activities/{activityId}/boards
   * @secure
   * @response `200` `AddBoardData` OK
   * @response `201` `void`
   * @response `404` `void`
   */
  addBoard = (
    activityId: number,
    data: CreateBoardRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<AddBoardData, void>({
      path: `/activities/${activityId}/boards`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 게시판 API
   * @name GetBoard
   * @summary 게시판 단일 조회
   * @request GET:/activities/{activityId}/boards/{boardId}
   * @secure
   * @response `200` `GetBoardData` OK
   * @response `404` `void`
   */
  getBoard = (
    activityId: number,
    boardId: number,
    params: RequestParams = {},
  ) =>
    this.request<GetBoardData, void>({
      path: `/activities/${activityId}/boards/${boardId}`,
      method: 'GET',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 게시판 API
   * @name DeleteBoard
   * @summary 게시판 삭제
   * @request DELETE:/activities/{activityId}/boards/{boardId}
   * @secure
   * @response `200` `DeleteBoardData`
   * @response `403` `void`
   * @response `404` `void`
   */
  deleteBoard = (
    activityId: number,
    boardId: number,
    params: RequestParams = {},
  ) =>
    this.request<DeleteBoardData, void>({
      path: `/activities/${activityId}/boards/${boardId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 게시판 API
   * @name UpdateBoard
   * @summary 게시판 메타 데이터 수정
   * @request PATCH:/activities/{activityId}/boards/{boardId}
   * @secure
   * @response `200` `UpdateBoardData`
   * @response `403` `void`
   * @response `404` `void`
   */
  updateBoard = (
    activityId: number,
    boardId: number,
    data: UpdateBoardRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateBoardData, void>({
      path: `/activities/${activityId}/boards/${boardId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 게시판 API
   * @name UpdateBoardImage
   * @summary 게시판 이미지 수정
   * @request PATCH:/activities/{activityId}/boards/{boardId}/image
   * @secure
   * @response `200` `UpdateBoardImageData`
   * @response `403` `void`
   * @response `404` `void`
   */
  updateBoardImage = (
    activityId: number,
    boardId: number,
    data: UpdateBoardImagePayload,
    params: RequestParams = {},
  ) =>
    this.request<UpdateBoardImageData, void>({
      path: `/activities/${activityId}/boards/${boardId}/image`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
