import { queryOptions } from '@tanstack/react-query'

import { AUTHORIZATION_API, BACKEND_API } from '@/service/config'
import {
  AddCommentReplyRequest,
  AddCommentRequest,
  CommentPagingRequest,
  CommentPagingResponse,
  Comments,
  DeleteCommentRequest,
  Posts,
  UpdateCommentRequest,
} from '@/service/model'

const getCommentsPaging = async ({
  postId,
  page,
  size = 10,
}: CommentPagingRequest): Promise<CommentPagingResponse> => {
  const commentClient = new Posts(BACKEND_API)
  const response = await commentClient.getComments(postId, { page, size })

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
      queryKey: [...commentQueries.lists(postId), page, size],
      enabled: !!postId,
      queryFn: async () => getCommentsPaging({ postId, page, size }),
    }),
}

export const addCommentApi = async ({ postId, data }: AddCommentRequest) => {
  const commentClient = new Posts(AUTHORIZATION_API)
  const response = await commentClient.registerComment(postId, data)

  return response.data
}

export const addCommentReplyApi = async ({
  commentId,
  data,
}: AddCommentReplyRequest) => {
  const commentClient = new Comments(AUTHORIZATION_API)
  const response = await commentClient.registerReply(commentId, data)

  return response.data
}

export const deleteCommentApi = async ({
  postId,
  commentId,
}: DeleteCommentRequest) => {
  const commentClient = new Posts(AUTHORIZATION_API)
  const response = await commentClient.removeComment(postId, commentId)

  return response.data
}

export const updateCommentApi = async ({
  postId,
  commentId,
  data,
}: UpdateCommentRequest) => {
  const commentClient = new Posts(AUTHORIZATION_API)
  const response = await commentClient.updateComment(postId, commentId, data)

  return response.data
}
