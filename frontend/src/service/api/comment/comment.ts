import { queryOptions } from '@tanstack/react-query'

import { BACKEND_API } from '@/service/config'
import {
  CommentPagingRequest,
  CommentPagingResponse,
  Posts,
} from '@/service/model'

const getCommentsPaging = async ({
  postId,
  page,
  size = 10,
}: CommentPagingRequest): Promise<CommentPagingResponse> => {
  const postClient = new Posts(BACKEND_API)
  const response = await postClient.getComments(postId, { page, size })

  const { data } = response

  return {
    comments: data.content,
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

export const commentQueries = {
  all: () => ['comments'],
  lists: (postId: number) => [...commentQueries.all(), 'lists', postId],
  list: ({ postId, page, size }: CommentPagingRequest) =>
    queryOptions({
      queryKey: [...commentQueries.lists(postId)],
      enabled: !!postId,
      queryFn: async () => getCommentsPaging({ postId, page, size }),
    }),
}
