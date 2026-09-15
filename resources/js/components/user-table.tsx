import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { User } from "@/types"

interface UserTableProps {
  isLoading: boolean;
  data: User[];
}

export const UserTable = ({ isLoading, data }: UserTableProps) => {
  const headers = [
    'ID',
    'Name',
    'Email',
    'Phone Number',
    'Created',
  ];

  return (
    <div className="border-sidebar-border/70 dark:border-sidebar-border rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            {
              headers.map((header: string) => (
                <TableHead>{header}</TableHead>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell
                colSpan={headers.length}
                className="text-muted-foreground text-center"
              >
                Loading data ...
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={headers.length}
                className="text-muted-foreground text-center"
              >
                No users found.
              </TableCell>
            </TableRow>
          ) : (
            data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone_number}</TableCell>
                <TableCell>
                  {user.created_at
                    ? new Date(
                      user.created_at,
                    ).toLocaleDateString()
                    : '—'}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
