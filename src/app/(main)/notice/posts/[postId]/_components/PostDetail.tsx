import { useMutation } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

import { DeletePostDialog } from '@/components/feature'
import { Separator, useToast } from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { NoticePostQuries, deleteNoticePostApi } from '@/service/api'
import { BasePostResponseDto } from '@/service/models'
import { useMyInfoStore } from '@/store/myInfo'

interface NoticePostDetailProps {
  post: BasePostResponseDto
}

export const NoticePostDetail = ({ post }: NoticePostDetailProps) => {
  const { role } = useMyInfoStore((state) => state.getMyInfo())

  const { mutate: deleteNoticePost, isPending } = useMutation({
    mutationFn: deleteNoticePostApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const { toast } = useToast()
  const router = useRouter()

  const onSuccess = (message?: string) => {
    toast({
      title: message,
      duration: 2000,
    })

    queryClient.invalidateQueries({ queryKey: NoticePostQuries.all() })
    router.push('/notice')
  }

  return (
    <div className="flex flex-col gap-3 py-4 text-primary">
      <div className="py-4 text-2xl font-semibold">{post.postTitle}</div>
      <div className="flex justify-end">
        {role === 'ROLE_ADMIN' && (
          <DeletePostDialog
            onClick={() => deleteNoticePost({ postId: post.postId })}
            disabled={isPending}
          />
        )}
      </div>
      <div className="flex items-center justify-between gap-2 text-sm">
        <div className="font-semibold">{post.userName}</div>
        <div className="flex gap-2">
          <div className="text-primary/60">
            {format(new Date(post.postRegDate), 'yyyy-MM-dd')}
          </div>
          <div className="text-primary/60">조회 {post.postViews}</div>
        </div>
      </div>
      <Separator />
    </div>
  )
}
