import { Button, Separator } from '@/components/ui'

export const DeleteAccountForm = () => {
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="text-xl font-bold sm:text-2xl">회원 탈퇴</div>
      <Separator className="my-2 sm:my-3" />
      <div className="text-xs text-primary/40 sm:text-sm">
        탈퇴 후에도 작성하신 게시글과 댓글은 삭제되지 않습니다. 탈퇴 전에 직접
        삭제해 주세요.
      </div>
      <div className="pt-2">
        <Button variant="secondary" onClick={() => console.log('회원 탈퇴')}>
          탈퇴하기
        </Button>
      </div>
    </div>
  )
}
