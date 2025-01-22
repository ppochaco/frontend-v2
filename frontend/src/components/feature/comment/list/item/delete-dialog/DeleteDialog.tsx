import { useState } from 'react'

import { TrashIcon } from '@radix-ui/react-icons'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui'

interface DeleteCommentDialogProps {
  onClick: () => void
}

export const DeleteCommentDialog = ({ onClick }: DeleteCommentDialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <TrashIcon
          onClick={() => setOpen(true)}
          className="h-4 w-4 hover:cursor-pointer hover:text-primary"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-md flex gap-2">댓글 삭제</DialogTitle>
          <DialogDescription className="text-start">
            정말로 댓글을 삭제하시겠습니까?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button onClick={() => setOpen(false)} variant="secondary">
            취소하기
          </Button>
          <Button variant="destructive" onClick={onClick}>
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
