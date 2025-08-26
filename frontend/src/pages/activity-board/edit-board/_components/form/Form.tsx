import { useState } from 'react'
import { ControllerRenderProps, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useSuspenseQueries } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

import { Button, Form, Input, Textarea } from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { UserQuries, boardQueries, updateBoardApi } from '@/service/api'
import { BoardResponseDto, UserResponseDto } from '@/service/model'
import { UpdateBoard, UpdateBoardSchema } from '@/service/schema'

import { BoardFormField } from './form-field'
import { SelectMemberInput } from './select-member-input'

type EditBoardFromProps = {
  activityId: number
  boardDetail: BoardResponseDto
}

export const EditBoardForm = ({
  activityId,
  boardDetail,
}: EditBoardFromProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const basePath = pathname.split('/').slice(0, -1).join('/')

  const { data: defaultUsers } = useSuspenseQueries({
    queries: boardDetail.participants.map((user) =>
      UserQuries.detail({ userId: user.userId }),
    ),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      }
    },
  })

  const { mutate: addBoard, isPending } = useMutation({
    mutationFn: updateBoardApi,
    onSuccess: (data) => onSuccess(data.message),
    onError: (error) => onError(error),
  })

  const form = useForm<UpdateBoard>({
    resolver: zodResolver(UpdateBoardSchema),
    defaultValues: {
      boardName: boardDetail?.boardName || '',
      boardIntro: boardDetail?.boardIntro || '',
      participants: defaultUsers.map((member) => member.userId),
    },
  })

  const [selectedMember, setSelectedMember] =
    useState<UserResponseDto[]>(defaultUsers)

  const onSubmit = (values: UpdateBoard) => {
    addBoard({ activityId, boardId: boardDetail.boardId, data: values })
  }

  const onSuccess = (message: string) => {
    toast.success(message)

    queryClient.invalidateQueries({ queryKey: boardQueries.all() })
  }

  const onError = (error: Error) => {
    if (error instanceof AxiosError && error.response) {
      const { code, errors } = error.response.data

      if (code === 'COMMON_001') {
        toast.error(`${errors[0].field}에는 ${errors[0].message}`)
      }
    }
  }

  const onChangeSelectedMember = (
    field: ControllerRenderProps,
    members: UserResponseDto[],
  ) => {
    setSelectedMember(members)
    field.onChange(members.map((member) => member.userId))
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full max-w-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <BoardFormField name="boardName" label="게시판 제목">
          {(field) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              placeholder="게시판 제목을 입력해주세요"
            />
          )}
        </BoardFormField>
        <BoardFormField name="boardIntro" label="게시판 소개">
          {(field) => (
            <Textarea
              className="h-24"
              value={field.value}
              onChange={field.onChange}
              placeholder="게시판 소개글을 작성해주세요"
            />
          )}
        </BoardFormField>
        <BoardFormField name="participants" label="게시판 이용자">
          {(field) => (
            <SelectMemberInput
              selectedMember={selectedMember}
              setSelectedMember={(member) =>
                onChangeSelectedMember(field, member)
              }
            />
          )}
        </BoardFormField>
        <div className="flex gap-2 justify-end pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(basePath)}
          >
            뒤로가기
          </Button>
          <Button disabled={isPending}>수정하기</Button>
        </div>
      </form>
    </Form>
  )
}
