'use client'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import PostContent from '@/components/PostView/PostContent'
import { Spinner } from '@/components/common'
import { useGetPost } from '@/service/data/post'

import { NoticePostDetail, NoticePostHero } from './_components'

type NoticePostPageParams = {
  params: {
    postId: string
  }
}

const NoticePostPage = ({ params }: NoticePostPageParams) => {
  const { data: post, status } = useGetPost({ postId: Number(params.postId) })

  if (status === 'pending' || !post) return <Spinner />

  return (
    <div>
      <NoticePostHero />
      <NoticePostDetail post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}

export default NoticePostPage
