import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { UserTable } from "@/components/user-table";
import { Button } from "@/components/ui/button"
import { RefreshCwIcon } from 'lucide-react';
import type { User } from "@/types"

import { users } from '@/routes';

export default function Users() {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function fetchUsers() {
    let cancelled = false;
    setIsLoading(true);
    fetch('/api/v1/users', {
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Request failed with status ${response.status}`,
          );
        }

        return response.json() as Promise<User[]>;
      })
      .then((json) => {
        if (!cancelled) {
          setData(json);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Head title="Users" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        {error && (
          <p className="text-destructive text-sm">
            Failed to load users: {error}
          </p>
        )}
        <div className="flex w-full justify-end">
          <Button onClick={fetchUsers} disabled={isLoading}>
            <RefreshCwIcon />
            {
              isLoading ? "Refreshing..." : "Refresh"
            }
          </Button>
        </div>
        <UserTable data={data} isLoading={isLoading} />
      </div>
    </>
  );
}

Users.layout = {
  breadcrumbs: [
    {
      title: 'Users',
      href: users(),
    },
  ],
};
