import { Activities } from '@/models/Activities'
import {
  BoardResponseDto,
  CreateBoardRequestDto,
} from '@/models/data-contracts'
import { keepPreviousData, queryOptions } from '@tanstack/react-query'

import { Paging } from '@/service/types/paging'

import { AUTHORIZATION_API, BACKEND_API } from '../config'

type BoardPagingRequest = {
  activityId: number
  page: number
  size?: number
}

type BoardPagingResponse = {
  boards: BoardResponseDto[]
} & Paging

const getBoardsPaging = async ({
  activityId,
  page,
  size,
}: BoardPagingRequest): Promise<BoardPagingResponse> => {
  const boardsApi = new Activities(BACKEND_API)
  const response = await boardsApi.getBoards(activityId, { page, size })

  const { data } = response

  return {
    boards: data.content,
    nextPageToken:
      data.pageable.pageNumber !== data.totalPages
        ? (data.pageable.pageNumber + 1).toString()
        : undefined,
    pageInfo: {
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      pageSize: data.pageable.pageSize,
    },
  }
}

type BoardDetailRequest = {
  activityId: number
  boardId: number
}

const getBoardDetail = async ({ activityId, boardId }: BoardDetailRequest) => {
  const boardsApi = new Activities(BACKEND_API)
  const response = await boardsApi.getBoard(activityId, boardId)

  return response.data
}

export const boardQueries = {
  all: () => ['boards'],
  lists: (activityId: number) => [...boardQueries.all(), 'lists', activityId],
  list: ({ activityId, page, size }: BoardPagingRequest) =>
    queryOptions({
      queryKey: [...boardQueries.lists(activityId), page],
      queryFn: async () => getBoardsPaging({ activityId, page, size }),
      placeholderData: keepPreviousData,
    }),
  details: () => [...boardQueries.all(), 'details'],
  detail: ({ activityId, boardId }: BoardDetailRequest) =>
    queryOptions({
      queryKey: [...boardQueries.details(), activityId, boardId],
      queryFn: async () => getBoardDetail({ activityId, boardId }),
    }),
}

type DeleteBoardRequest = {
  activityId: number
  boardId: number
}

export const deleteBoard = async ({
  activityId,
  boardId,
}: DeleteBoardRequest) => {
  const boardsApi = new Activities(AUTHORIZATION_API)
  const response = await boardsApi.deleteBoard(activityId, boardId)

  return response.data
}

type AddBoardRequest = {
  activityId: number
} & CreateBoardRequestDto

export const addBoard = async ({
  activityId,
  boardName,
  boardIntro,
  participants,
}: AddBoardRequest) => {
  const boardsApi = new Activities(AUTHORIZATION_API)
  const response = await boardsApi.addBoard(activityId, {
    boardName,
    boardIntro,
    participants,
  })

  return response.data
}
