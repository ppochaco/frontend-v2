import { useForm } from 'react-hook-form'

import { UserResponseDto } from '@/models'
import { AdminUserQuries, changeRole } from '@/servicetest/api/admin'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import {
  Button,
  DialogFooter,
  Form,
  FormControl,
  FormField,
  FormItem,
  useToast,
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { ChangeRole, ChangeRoleSchema } from '@/schema/admin'

import { RoleRadioGroup } from './RoleRadioGroup'

type ChangeRoleDialogFormProps = {
  user: UserResponseDto
}

export const ChangeRoleDialogForm = ({ user }: ChangeRoleDialogFormProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: changeRole,
    onSuccess: (data) => onSuccess(data.message),
  })
  const { toast } = useToast()

  const form = useForm<ChangeRole>({ resolver: zodResolver(ChangeRoleSchema) })

  const onSubmit = (values: ChangeRole) => {
    mutate({ userId: user.userId, role: values.role })
  }

  const onSuccess = (message: string) => {
    queryClient.invalidateQueries({
      queryKey: AdminUserQuries.filter({ isActive: true }),
    })

    toast({
      title: message,
      duration: 2000,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 pt-2"
      >
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-5">
              <FormControl>
                <RoleRadioGroup
                  onChange={field.onChange}
                  disabledRole={user.role}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" className="w-20" disabled={isPending}>
            변경하기
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
