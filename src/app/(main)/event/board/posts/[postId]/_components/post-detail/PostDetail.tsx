import { format } from 'date-fns'

import { Button, Separator } from '@/components/ui'
import { useMyInfoStore } from '@/store/myInfo'
import { PostView } from '@/types/post'

type EventPostDetailProps = {
  post: PostView
}

export const EventPostDetail = ({ post }: EventPostDetailProps) => {
  const { role } = useMyInfoStore((state) => state.getMyInfo())

  return (
    <div className="flex flex-col gap-3 py-4 text-primary">
      <div className="pt-4 text-4xl font-semibold">{post.postTitle}</div>
      <div className="flex justify-end">
        {role === 'ROLE_ADMIN' && (
          <Button
            onClick={() => {}}
            variant="link"
            className="h-fit p-0 text-primary/60 hover:text-primary"
          >
            삭제하기
          </Button>
        )}
      </div>
      <div className="flex flex-col items-start gap-1 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{post.userName}</div>
          <div>·</div>
          <div className="text-primary/60">
            {format(new Date(post.postCreateDate), 'yyyy-MM-dd')}
          </div>
          <div className="text-primary/60">조회 {post.postViews}</div>
        </div>
        <div className="flex">
          <div>활동일 {post.postActivityStartDate}</div>
          {post.postActivityEndDate && <div>~{post.postActivityEndDate}</div>}
        </div>
      </div>
      <Separator />
    </div>
  )
}
