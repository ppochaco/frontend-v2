import { Button, Separator } from '@/components/ui'

export const DeleteAccountForm = () => {
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="text-xl font-bold sm:text-2xl">회원 탈퇴</div>
      <Separator className="my-2 sm:my-3" />
      <div>
        <Button variant="secondary" onClick={() => console.log('회원 탈퇴')}>
          탈퇴하기
        </Button>
      </div>
      <div className="py-2 text-xs text-primary/40 sm:text-sm">
        탈퇴 시 작성한 게시글 및 댓글이 모두 삭제되며 복구되지 않습니다.
      </div>
    </div>
  )
}
