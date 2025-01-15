'use client'

import { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import {
  ACCESS_ERROR_MESSAGE,
  DATA_ERROR_MESSAGES,
} from '@/constant/errorMessage'
import { activityPostQuries, boardQueries } from '@/service/api'
import { useMyInfoStore } from '@/store/myInfo'

import { EditActivityPostForm } from './components/form/Form'
import { EditActivityPostHero } from './components/hero/Hero'

type EditPostPageParams = {
  params: {
    activityId: string
    boardId: string
  }
}

const EditActivityPostPage = ({ params }: EditPostPageParams) => {
  const { data: board, status } = useQuery(
    boardQueries.detail({
      activityId: Number(params.activityId),
      boardId: Number(params.boardId),
    }),
  )

  const postIdParams = useParams()

  const { data: boardInfo, status: boardInfoStatus } = useQuery(
    activityPostQuries.detail({
      boardId: Number(params.boardId),
      postId: Number(postIdParams.postId),
    }),
  )

  const { userId } = useMyInfoStore((state) => state.myInfo)

  useEffect(() => {
    if (boardInfo?.userId !== userId) {
      throw new Error(ACCESS_ERROR_MESSAGE.UNAUTHORIZED_ERROR)
    }
  }, [userId, boardInfo?.userId])

  if (status === 'pending') return <div />

  if (!board) throw new Error(DATA_ERROR_MESSAGES.BOARD_DETAIL_NOT_FOUND)

  if (boardInfoStatus === 'pending' || !boardInfo) return <div />

  return (
    <div className="flex flex-col gap-6 py-10">
      <EditActivityPostHero boardName={board.boardName} />
      <EditActivityPostForm
        editPostData={boardInfo}
        boardId={Number(params.boardId)}
      />
    </div>
  )
}

export default EditActivityPostPage
