'use client'

import { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { NotFound, Spinner } from '@/components/common'
import { ACCESS_ERROR_MESSAGE } from '@/constant/errorMessage'
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

  const { data: postInfo, status: postInfoStatus } = useQuery(
    activityPostQuries.detail({
      boardId: Number(params.boardId),
      postId: Number(postIdParams.postId),
    }),
  )

  const { userId } = useMyInfoStore((state) => state.myInfo)

  useEffect(() => {
    if (postInfo?.userId !== userId) {
      throw new Error(ACCESS_ERROR_MESSAGE.UNAUTHORIZED_ERROR)
    }
  }, [userId, postInfo])

  if (status === 'pending' || postInfoStatus === 'pending')
    return <EditActivityPostPageSkeleton />

  if (!board || !postInfo) return <NotFound />

  return (
    <div className="flex flex-col gap-6 py-10">
      <EditActivityPostHero boardName={board.boardName} />
      <EditActivityPostForm
        postInfo={postInfo}
        boardId={Number(params.boardId)}
      />
    </div>
  )
}

export default EditActivityPostPage

const EditActivityPostPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <EditActivityPostHero boardName="" />
      <div className="flex justify-center pt-10">
        <Spinner />
      </div>
    </div>
  )
}
