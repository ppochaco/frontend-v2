import { Activities } from '@/models/Activities'
import { BoardResponseDto } from '@/models/data-contracts'

import { Paging } from '@/service/types/paging'

const boardsApi = new Activities()

export interface BoardsResponse extends Paging {
  boards?: BoardResponseDto[]
}

export const getBoardsPaging = async (
  activityId: number,
  page?: number,
  size?: number,
): Promise<BoardsResponse> => {
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
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      pageSize: data.pageable?.pageSize,
    },
  }
}
