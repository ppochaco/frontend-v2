import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { TableContent, TableFilterSkeleton } from '@/components/common'

interface NotFoundMemberTableProps<T> {
  message: string
  columns: ColumnDef<T>[]
}

export function NotFoundMemberTable<T>({
  message,
  columns,
}: NotFoundMemberTableProps<T>) {
  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="flex w-full max-w-screen-lg flex-col gap-2 pb-20">
      <TableFilterSkeleton />
      <TableContent table={table} />
      <div className="flex justify-center pt-2 text-primary/70">{message}</div>
    </div>
  )
}
