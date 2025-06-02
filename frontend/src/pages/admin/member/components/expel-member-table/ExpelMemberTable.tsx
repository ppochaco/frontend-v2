import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'

import { NetworkError } from '@/components/common'
import {
  MemberTable,
  MemberTableSkeleton,
  NotFoundMemberTable,
} from '@/components/feature'
import { AdminUserQuries } from '@/service/api'
import { UserResponseDto } from '@/service/model'
import { convertRoleName } from '@/utils'

import { ExpelMemberDialog } from './expel-member-dialog'

export const ExpelMemberTable = () => {
  const {
    data: activeUsers,
    status,
    error,
  } = useQuery(AdminUserQuries.active())

  const expelMemberColumn: ColumnDef<UserResponseDto>[] = [
    {
      header: '',
      id: 'id',
      cell: ({ row, table }) => (
        <div className="text-center">
          {table?.getSortedRowModel()?.flatRows?.indexOf(row) + 1}
        </div>
      ),
    },
    {
      accessorKey: 'userName',
      header: '이름',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('userName')}</div>
      ),
    },
    {
      accessorKey: 'studentNumber',
      header: '학번',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('studentNumber')}</div>
      ),
    },
    {
      accessorKey: 'role',
      header: '등급',
      cell: ({ row }) => (
        <div className="text-center">
          {convertRoleName(row.getValue('role'))}
        </div>
      ),
    },
    {
      accessorKey: 'isBanned',
      header: '',
      cell: ({ row }) => {
        return (
          <div className="flex justify-center">
            <ExpelMemberDialog user={row.original} />
          </div>
        )
      },
    },
  ]

  if (status === 'pending')
    return <MemberTableSkeleton columns={expelMemberColumn} />

  if (error) return <NetworkError />

  if (!activeUsers.length) {
    return (
      <NotFoundMemberTable
        message="회원이 없습니다."
        columns={expelMemberColumn}
      />
    )
  }

  return <MemberTable data={activeUsers} columns={expelMemberColumn} />
}
