import type { ColumnDef } from '@tanstack/vue-table'

export const columns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: c => c.getValue()
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: c => c.getValue()
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: c => c.getValue()
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: c => c.getValue()
  }
]
