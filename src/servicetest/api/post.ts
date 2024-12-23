import { Boards, PostSummaryResponseDto, Posts } from '@/models'
import formatDateDistanceFromToday from '@/utils/date-distance'
import { queryOptions } from '@tanstack/react-query'

import { Paging } from '@/service/types/paging'

import { BACKEND_API } from '../config'

type ActivityPostPagingRequest = {
  boardId: number
  page: number
  size?: number
}

type PostPagingResponse = {
  posts: PostSummaryResponseDto[]
} & Paging

const getActivityPostPaging = async ({
  boardId,
  page,
  size = 10,
}: ActivityPostPagingRequest): Promise<PostPagingResponse> => {
  const postApi = new Boards(BACKEND_API)
  const response = await postApi.getActivityPosts1(boardId, { page, size })

  const { data } = response

  const posts = data.content.map((post) => {
    const formatCreateDate = formatDateDistanceFromToday(
      new Date(post.postCreateDate),
    )

    if (!formatCreateDate) return post

    return {
      ...post,
      postCreateDate: formatCreateDate,
    }
  })

  return {
    posts,
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

type PostPagingRequest = {
  postType: 'NOTICE' | 'EVENT'
  page: number
  size?: number
}

const getPostPaging = async ({
  postType,
  page,
  size = 10,
}: PostPagingRequest): Promise<PostPagingResponse> => {
  const postApi = new Posts(BACKEND_API)
  const response = await postApi.getActivityPosts({ postType, page, size })

  const { data } = response

  const posts = data.content.map((post) => {
    const formatCreateDate = formatDateDistanceFromToday(
      new Date(post.postCreateDate),
    )

    if (!formatCreateDate) return post

    return {
      ...post,
      postCreateDate: formatCreateDate,
    }
  })

  return {
    posts,
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

type PostDetailRequest = {
  postId: number
}

const getPostDetail = async ({ postId }: PostDetailRequest) => {
  const postApi = new Posts(BACKEND_API)
  const response = await postApi.getPost(postId)

  return response.data
}

export const PostQuries = {
  all: () => ['posts'],
  filter: (postType: 'NOTICE' | 'EVENT') => [...PostQuries.all(), postType],
  list: ({ postType, page, size }: PostPagingRequest) =>
    queryOptions({
      queryKey: [...PostQuries.filter(postType), page],
      queryFn: async () => getPostPaging({ postType, page, size }),
    }),
  detail: (postId: number) =>
    queryOptions({
      queryKey: [...PostQuries.all(), postId],
      queryFn: async () => getPostDetail({ postId }),
    }),
}

export const activityPostQuries = {
  all: () => [...PostQuries.all(), 'activity'],
  board: (boardId: number) => [...activityPostQuries.all(), boardId],
  list: ({ boardId, page, size }: ActivityPostPagingRequest) =>
    queryOptions({
      queryKey: [...activityPostQuries.board(boardId), page],
      queryFn: async () => getActivityPostPaging({ boardId, page, size }),
    }),
}
