import { Activities } from '@/models/Activities'
import { BoardResponseDto } from '@/models/data-contracts'

import { Paging } from '@/service/types/paging'

import { BACKEND_API } from '../config'

export interface BoardsResponse extends Paging {
  boards?: BoardResponseDto[]
}

export const getBoardsPaging = async (
  activityId: number,
  page?: number,
  size?: number,
): Promise<BoardsResponse> => {
  const boardsApi = new Activities(BACKEND_API)
  const response = await boardsApi.getBoards(activityId, { page, size })

  const { data } = response

  return {
    boards: data.content,
    nextPageToken:
      data.pageable?.pageNumber !== undefined &&
      data.pageable?.pageNumber !== data.totalPages
        ? (data.pageable?.pageNumber + 1).toString()
        : undefined,
    pageInfo: {
      totalPages: data.totalPages ?? 0,
      totalElements: data.totalElements ?? 0,
      pageSize: data.pageable?.pageSize ?? 0,
    },
  }
}
